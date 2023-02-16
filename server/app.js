require("dotenv").config();
const express = require("express");
const http = require("http");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const cluster = require("cluster");
const os = require("os");
const { Server } = require("socket.io");

const chatBot = require("./routes/chatBotRoute");
const doctorRoute = require("./routes/doctorRoute");
const patientRoute = require("./routes/PatientRoute");
const app = express();
const numCPUs = os.cpus().length;
const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  optionsSuccessStatus: 200,
};

const server = http.createServer(app);

// MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// ROUTES

// import patientRoute from "./routes/patientRoute.js";
// import authRoute from "./routes/authRoute.js";

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
});

const dbConnect = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/healthAssitant", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("🔗 db connected..."))
    .catch((error) => console.error(error));
};

mongoose.set("strictQuery", false);

dbConnect();

// USING ROUTE
app.use("/api/doctor", doctorRoute);
app.use("/api/answer", chatBot);
app.use("/api/patient", patientRoute);

// SINGLE CORE UTILIZATION

// if (process.argv[2] === "prod") {5f
//   if (cluster.isPrimary) {
//     console.log(`Primary ${process.pid} is running`);
//     for (let i = 0; i < numCPUs; i++) {
//       cluster.fork();
//     }

//     cluster.on("exit", (worker, code, signal) => {
//       console.log(`worker ${worker.process.pid} died`);
//       cluster.fork();
//     });
//   } else {
//     app.listen(PORT, () => {
//       console.log(`🚀 server @ ${PORT} with ${process.pid} `);
//     });
//   }
// } else {

// }

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});

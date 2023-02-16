import Toast from 'react-bootstrap/Toast';
import './Noti.css'
function Noti() {
    return (

        <div className='notipage'>
            <div className='rownoti'>
                <div className='col-6'>
                    
                    <h4>Today's Notification</h4>
                    <br />
                    {[
                        'Success'
                    ].map((variant, idx) => (
                        <Toast
                            className="d-inline-block m-1"
                            bg={variant.toLowerCase()}
                            key={idx}
                        >
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">Dr.Anil Aggrawal</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body className='text-white'>
                                It's time for your pre-lunch medicine
                            </Toast.Body>
                        </Toast>
                    ))}
                    <br />
                    <br />

                    {[
                        'Success'
                    ].map((variant, idx) => (
                        <Toast
                            className="d-inline-block m-1"
                            bg={variant.toLowerCase()}
                            key={idx}
                        >
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">Dr.Anil Aggrawal</strong>
                                <small>1 hr ago</small>
                            </Toast.Header>
                            <Toast.Body className='text-white'>
                                Please, check your Blood Preasure and Oxygen level, and notifi doctor if not normal,
                            </Toast.Body>
                        </Toast>
                    ))}

                    <br />
                    <br />

                    {[
                        'Success'
                    ].map((variant, idx) => (
                        <Toast
                            className="d-inline-block m-1"
                            bg={variant.toLowerCase()}
                            key={idx}
                        >
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">Dr.Anil Aggrawal</strong>
                                <small>5 hr ago</small>
                            </Toast.Header>
                            <Toast.Body className='text-white'>
                                Good morning, It's time for your morning walk, today's task is 2km normal walk and check Blood Presure and oxygen after walk, notify is not normal
                            </Toast.Body>
                        </Toast>
                    ))}
                </div>



                <div className='col-6'>
                    
                    <h4>Yesterday Notification</h4>
                    <br />
                    {[
                        'Primary'
                    ].map((variant, idx) => (
                        <Toast
                            className="d-inline-block m-1"
                            bg={variant.toLowerCase()}
                            key={idx}
                        >
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">Dr.Anil Aggrawal</strong>
                                <small>1 day ago</small>
                            </Toast.Header>
                            <Toast.Body className='text-white'>
                                It's time for your pre-lunch medicine
                            </Toast.Body>
                        </Toast>
                    ))}
                    <br />
                    <br />
                    <h4>14/2/2023</h4>
                    <br />

                    {[
                        'Primary'
                    ].map((variant, idx) => (
                        <Toast
                            className="d-inline-block m-1"
                            bg={variant.toLowerCase()}
                            key={idx}
                        >
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">Dr.Anil Aggrawal</strong>
                                <small>2 day ago</small>
                            </Toast.Header>
                            <Toast.Body className='text-white'>
                                Please, check your Blood Preasure and Oxygen level, and notifi doctor if not normal,
                            </Toast.Body>
                        </Toast>
                    ))}

                    <br />
                    <br />

                    {[
                        'Primary'
                    ].map((variant, idx) => (
                        <Toast
                            className="d-inline-block m-1"
                            bg={variant.toLowerCase()}
                            key={idx}
                        >
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">Dr.Anil Aggrawal</strong>
                                <small>2 day ago</small>
                            </Toast.Header>
                            <Toast.Body className='text-white'>
                                Good morning, It's time for your morning walk, today's task is 2km normal walk and check Blood Presure and oxygen after walk, notify is not normal
                            </Toast.Body>
                        </Toast>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Noti;
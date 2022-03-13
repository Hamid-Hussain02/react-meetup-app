import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";


function NewMeetupsPage(){

    const navigate =useNavigate();

    const addMeetupHandler=(meetupData)=>{
        fetch(
            'https://react-meetup-app-51c80-default-rtdb.firebaseio.com/meetups.json',
            {
                method:'POST',
                body:JSON.stringify(meetupData),
                header:{
                    'Content-Type':'application/json'
                }
            }
            ).then(()=>{
                navigate('/', { replace: true })
            });
    }
    return(
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
        
    )
}


export default NewMeetupsPage
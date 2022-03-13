import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from 'react';



function AllMeetupsPage(){
    const [isLoading,setIsLoading]=useState(true)
    const [loadedMeetups,setLoadedMeetups]=useState([]);

    useEffect(()=>{
        setIsLoading(true)
        fetch(
            'https://react-meetup-app-51c80-default-rtdb.firebaseio.com/meetups.json',
            ).then((response)=>{
                console.log(response)
                return response.json()
            }).then((data)=>{
                console.log(data)
                const meetups=[];
                for(const key in data){
                    const meetup={
                        id:key,
                        ...data[key]
                    }
                    meetups.push(meetup)
                }
                setIsLoading(false)
                setLoadedMeetups(meetups)
            });
    },[]);
        if(isLoading){
            return (
                <section>
                    Loading....
                </section>
            )
        }
        
    return(
        <div>
            <h1>All Meetups</h1>
            {/* <ul>
            {DUMMY_DATA.map((meetup)=>{
                return<li key={meetup.id}>{meetup.title}</li>
            })}
            </ul> */}
            <MeetupList meetups={loadedMeetups} />
        </div>
    );
}


export default AllMeetupsPage
import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = email =>
  axios.get(`http://localhost:4000/user/${email}`)

const fetchChannels = channelId => 
  axios.get(`http://localhost:4000/channels/${channelId}`)

export const DependentQueriesPage = email => {
    const { data: user } = useQuery(['user', email.email],() => fetchUserByEmail(email.email))
    const channelId = user?.data.channelId;
    const { data: channel } = useQuery(['channel', channelId], () => 
      fetchChannels(channelId), {
        enabled: !!channelId
      })
    return (
        <>
        <h2>Dependent Queries Page</h2>
        {channel?.data?.courses.map(course => {
          return <div key={`${course}`}>{course}<br /><br /></div>
        })}
        </>
    )
}
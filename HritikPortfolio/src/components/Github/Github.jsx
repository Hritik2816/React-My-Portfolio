import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/hiteshchoudhary')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl dark:bg-gray-800 dark:border-gray-700'>Github followers: {data.followers}
      <a
        href="https://github.com/Hritik2816"
        className="hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        <img src={data.avatar_url} alt="Git picture" width={300} />
      </a>
    </div >
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Hritik2816')
  return response.json()
}
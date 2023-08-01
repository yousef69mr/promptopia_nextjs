'use client';

import Profile from '@components/Profile';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const UserProfile = (props) => {
  const { params } = props;

  const searchParams = useSearchParams();
  const username = searchParams.get('name');
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/users/${params?.id}/posts`);
        const data = await response.json();

        setUserPosts(data);
      } catch (error) {
        console.log('Error fetching posts', error);
      }
    };
    if (params?.id) {
      fetchPosts();
    }
  }, [params?.id]);

  return (
    <Profile
      name={username}
      desc={`Welcome to ${username} profile page`}
      data={userPosts}
    />
  );
};

export default UserProfile;

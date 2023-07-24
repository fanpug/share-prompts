"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from '@components/Profile';

const PublicProfile = ({ params }) => {
    const searchParams = useSearchParams();
    const username = searchParams.get("username");

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params.id}/posts`);
            const data = await response.json();

            setPosts(data);
        }

        if (params.id) {
            fetchPosts();
        }
    }, [])

    return (
        <Profile
            name={username}
            desc={`Welcome to ${username}'s profile page`}
            data={posts}
        />
    )
}

export default PublicProfile
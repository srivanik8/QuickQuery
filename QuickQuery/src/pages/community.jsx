import React from "react";
import Header from "../components/header";
import Carousel from 'react-bootstrap/Carousel';
import { Container } from "react-bootstrap";
import { useState, useEffect } from 'react';


function Community(){

    const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newPost }),
      });

      if (response.ok) {
        setNewPost('');
        fetchPosts();
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };


    return(
        <>
            <div>
                <Header />
                <br />
                <br />


            <Container style={{backgroundColor: "#011F2B" , borderRadius: 150 , width: "80%" , height: 550}}>
            <Carousel data-bs-theme="dark">
      <Carousel.Item style={{
                width: "60%", height: "60%"
            }}>
        <img
            style={{marginLeft: "35%"}}
          className="d-block w-100"
          src="https://images.contentstack.io/v3/assets/blt7151619cb9560896/blt5def0d867a3bb9e9/645a42d5058dff1d45660164/kvh0n89kxch8wlj3b-OPSMANAGER_SLALOM1_1.svg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{
                width: "60%", height: "60%"
            }}>
        <img
        style={{marginLeft: "35%"}}
          className="d-block w-100"
          src="https://webimages.mongodb.com/_com_assets/cms/l6blfik3ttn5vx74v-EmbeddedAnalytics_BringDataToUsers_Slalom3%201.svg?auto=format%252Ccompress"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{
                width: "60%", height: "60%"
            }}
      >
        <img
        style={{marginLeft: "30%"}}
          className="d-block w-100"
          src="https://webimages.mongodb.com/_com_assets/cms/lxoya89s3pum8syz5-General_INDUSTRIES_AI_Spot_BS_Lavender.svg?auto=format%252Ccompress"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    <br />

    <br />

    
            </Container>
            <br />
            <br />
            <h1 style={{fontSize: 40}} className="gradient-text">Come for the products, Stay for the COMMUNITY</h1>
            <br />
            <p style={{ color: "white" , width: "900px" , textAlign: "left" , marginLeft: 300 , fontFamily: "manrope" , color: "black" , fontWeight: 600 , fontSize: 17}}>
            The Community Forums is a wonderful place to discuss anything related to learning, using, developing, or otherwise working with MongoDB products, services, and ecosystem.
            </p>
            
            <div className="community-page">
      <h1>Community Board</h1>
      <form onSubmit={handleSubmit} className="post-form">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="What's on your mind?"
        />
        <button type="submit">Post</button>
      </form>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post._id} className="post">
            <p>{post.content}</p>
            <small>{new Date(post.createdAt).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>

            </div>
        </>
    )
}
export default Community;
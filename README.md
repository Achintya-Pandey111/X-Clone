X (Twitter) Clone
Live Demo: https://x-clone-topaz-ten.vercel.app/

A full-featured Twitter/X social media clone built with React. This application replicates core social media functionality including posting, liking, commenting, following users, notifications, and profile customization.

Features
Authentication
User registration with name, email, password, and date of birth

Login functionality

Guest mode to browse posts without an account

Persistent login state using localStorage

Feed & Posts
"For You" feed with dynamic posts

"Following" feed showing posts from followed users

Create new posts with text and images

Like/unlike posts with animated heart effects

Delete your own posts

View post statistics (replies, retweets, likes, views)

Comments
Comment on any post

Delete your own comments

Nested comment threads per post

Notifications System
See when someone likes your post

Follow notifications

Repost notifications

Mention notifications

Tabbed filtering (All, Verified, Mentions)

Explore Page
Search for content

Trending topics across categories (Technology, Sports, Entertainment, News)

Category tabs (For you, Trending, News, Sports, Entertainment)

Hero section featuring trending content

Profile Management
Edit profile modal

Change profile name and bio

Upload profile avatar image

Upload cover/banner image

Change password functionality

Who to Follow Suggestions
AI-generated avatar suggestions using DiceBear API

Follow/unfollow users

Search for users by name or handle

Dynamic loading of more suggestions

Responsive Design
Desktop layout with sidebar, main feed, and widgets

Tablet layout with collapsed sidebar

Mobile layout with bottom navigation bar

Fully responsive across all device sizes

Premium Section
Subscription prompt for premium features

Trending topics widget

Tech Stack
React 18 - UI framework

Context API - State management (authentication)

CSS3 - Custom styling with CSS variables

LocalStorage - Persistent data storage

DiceBear API - Avatar generation

Unsplash - Demo images for posts and banners

Project Structure
text
src/
├── components/
│   ├── Sidebar.jsx          # Main navigation sidebar
│   ├── Feed.jsx             # Main feed with post composer
│   ├── FollowingFeed.jsx    # Following-only feed
│   ├── Post.jsx             # Individual post component
│   ├── Widgets.jsx          # Right sidebar widgets
│   ├── Explore.jsx          # Explore page
│   ├── Notifications.jsx    # Notifications page
│   ├── EditProfileModal.jsx # Profile editing modal
│   ├── MobileNav.jsx        # Mobile bottom navigation
│   └── Register.jsx         # Authentication modal
├── AuthContext.jsx          # Authentication context provider
├── App.jsx                  # Main app component
├── App.css                  # Global styles
└── index.js                # Entry point
Key Features in Detail
Post Interaction
Like posts with visual heart animation

Real-time like count updates

Comment system with reply functionality

Image Upload
Upload images for posts

Preview images before posting

Avatar and banner image uploads for profiles

Search Functionality
Search for users in the "Who to follow" widget

Real-time filtering of suggestions

Clear search with reset button

Responsive Breakpoints
1280px - Collapsed sidebar (icons only)

1080px - Hide widgets sidebar

600px - Hide sidebar, show mobile navigation

Getting Started
Prerequisites
Node.js (v14 or higher)

npm or yarn

Installation
Clone the repository:

bash
git clone <repository-url>
cd x-clone
Install dependencies:

bash
npm install
Start the development server:

bash
npm start
Open http://localhost:3000 to view it in your browser.

Usage
Creating an Account
Click "Sign up" on the registration modal

Enter your name, email, and password

Select your date of birth

Click "Next" to complete registration

Browsing as Guest
Click "View all posts without an account" on the login screen

Browse all content without creating an account

Creating a Post
Type your content in the composer textarea

Optional: Click the image icon to add a photo

Click "Post" to share your content

Editing Profile
Click your profile icon in the sidebar

Click "Profile" from the menu

Update your name, bio, avatar, or banner image

Optionally change your password

Click "Save" to apply changes

Following Users
Navigate to the "Who to follow" widget

Click "Follow" on any suggested user

View followed users' posts in the "Following" feed

Demo Data
The application comes pre-loaded with:

30+ sample posts from popular brands and personalities

Sample trending topics

Example notifications

Suggested users to follow

Browser Support
Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

Future Enhancements
Real-time updates with WebSockets

Backend API integration

Direct messaging system

Retweet functionality

Bookmarking posts

Push notifications

Dark/light theme toggle

Built with React and modern web technologies.


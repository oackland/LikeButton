import React, {useState} from 'react';
import {nameDirectory} from './NameDirectoryPage';
import {FaHeart} from 'react-icons/fa';

interface AvatarData {
    name: string;
    email: string;
    phone: string;
    avatarUrl: string;
}

const AvatarWithNames: React.FC = () => {
    const [likedAvatars, setLikedAvatars] = useState<AvatarData[]>([]);
    const [currentData, setCurrentData] = useState<AvatarData>({
        ...nameDirectory[0],
        avatarUrl: `https://xsgames.co/randomusers/avatar.php?g=pixel&timestamp=${Date.now()}`
    });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showHeartEffect, setShowHeartEffect] = useState(false);
    const isLiked = () => {
        return !!likedAvatars.find(avatar => avatar.avatarUrl === currentData.avatarUrl);
    };

    const handleToggleLike = () => {
        if (isLiked()) {
            console.log('unliked');
            handleUnlikeClick(currentData);
        } else {
            handleLikeClick();
            console.log('liked');
        }
    };

    const handleLikeClick = () => {
        setLikedAvatars([...likedAvatars, currentData]);

        if (currentIndex < nameDirectory.length - 1) {
            setCurrentIndex(currentIndex + 1);
            const nextData = {
                ...nameDirectory[currentIndex + 1],
                avatarUrl: `https://xsgames.co/randomusers/avatar.php?g=pixel&timestamp=${Date.now()}`
            };
            setCurrentData(nextData);
        }
    };


    const handleUnlikeClick = (avatarToRemove: AvatarData) => {
        const newLikedAvatars = likedAvatars.filter(avatar => avatar.avatarUrl !== avatarToRemove.avatarUrl);
        setLikedAvatars(newLikedAvatars);
        console.log('unliked')
    };

    const handleImageDoubleClick = () => {
        setShowHeartEffect(true);

        setTimeout(() => {
            setShowHeartEffect(false);
            handleToggleLike();
        }, 1000);
    };


    return (
        <div>
            <div className="avatar-container">
                <img
                    src={currentData.avatarUrl}
                    alt="Random Avatar"
                    onDoubleClick={handleImageDoubleClick}
                />
                {showHeartEffect && <FaHeart className="heart-effect"/>}
                <p><span className={'span'}>Name:</span> {currentData.name}</p>
                <p><span className={'span'}>Email:</span> {currentData.email}</p>
                <p><span className={'span'}>Phone:</span> {currentData.phone}</p>
                <br/>
                {showHeartEffect && <FaHeart className="heart-effect" size="100%"/>}
                <FaHeart onClick={handleToggleLike} color={isLiked() ? 'red' : 'gray'}/>
                <br/>
                <i className={'i'}>tap the heart or double tap the image to add to your list</i>
            </div>

            <div className="avatars-list">
                {likedAvatars.map((avatar, index) => (
                    <div key={index} className="avatar-item glowing-border">
                        <img src={avatar.avatarUrl} alt="Liked Avatar"/>
                        <p><span className={'span'}>Name:</span> {avatar.name}</p>
                        <p><span className={'span'}>Email:</span> {avatar.email}</p>
                        <p><span className={'span'}>Phone:</span> {avatar.phone}</p>
                        <br/>
                        <FaHeart onClick={() => handleUnlikeClick(avatar)} color='red'/>
                        <br/>
                        <i className={'i'}>tap the heart to remove from the list</i>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvatarWithNames;

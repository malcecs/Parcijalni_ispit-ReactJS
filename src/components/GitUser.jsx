import React from "react";
import PropTypes from "prop-types";

const style = {
container: {
    textAlign:"Justify",
},

titleContainer: {
    alignItems:"center",
    display:"flex",
},

image: {
    widht:150,
    height:150,
}, 

name: {
    fontSize:60,

},
};

export default function GitUser ({user}) {
    if (!user) { 
        return null;
    }

const {avatar, bio, name, location } = user;

return (
    <div style={style.container}>
<div style={style.titleContainer}>
<span style={style.name}>{name}</span>
<img src={avatar} alt= "no logo" style={style.image} />
</div>
<p><strong>Bio:</strong>{bio}</p>
<p><strong>Location:</strong>{location}</p>
</div>

);
};

GitUser.propTypes = {
    user : PropTypes.object,

};
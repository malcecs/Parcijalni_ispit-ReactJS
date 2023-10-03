
function resolveResponse(response) {
    if (response.status === 200) {
        return response.json();
    }

if (response.status === 404) {
    throw new Error ("no such user!");
}

throw new Error("ops, Server error!");


function fetchUser(userName) {
    const url = `https://api.github.com/users/${userName}`;
    return fetch(url).then(response => resolveResponse(response));
  }

}
function fetchUserResponse(userName) {
    const url =`https://api.github.com/users/${userName}/repositories`;
    return fetch(url).then(response => resolveResponse(response));
}

const exportDefault = {
    fetchUser,
    fetchUserResponse,
};

export default exportDefault;

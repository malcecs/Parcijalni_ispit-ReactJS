import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

function GitRepos ({repos}) {
if (!repos || repos.length <= 0) {
    return null;
};

return (
<div>
<p>REPOSITORIES</p>
<ListGroup>
{repos.map(repos => (
<ListGroup.Item key={repos.id}>{repos.name}</ListGroup.Item>
))}
</ListGroup>
</div>

);
};

GitRepos.prototype = {
    repos: PropTypes.array
};

export default GitRepos;


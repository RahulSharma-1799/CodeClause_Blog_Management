import React, { useState, useEffect, useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { API } from "../../services/api.js";
import { DataContext } from "../../context/DataProvider.jsx";
const Container = styled(Box)`
  margin: 65px 100px;
`;
const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
});
const Heading = styled(Typography)`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin: 25px 0 10px 0;
  word-break: break-word;
`;

const EditIcon = styled(Edit)`
  margin: 10px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
  margin: 10px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
`;
const Author = styled(Box)`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
`;
const Description = styled(Typography)`
  word-break: break-word;
`;
const DetailView = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const { account } = useContext(DataContext);
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      if (response.isSuccess) {
        setPost(response.data);
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
      <Image src={url} alt="blog" />
      <Box style={{ float: "right" }}>
        {account.username === post.username && (
          <>
            <EditIcon color="primary" />
            <DeleteIcon color="error" />
          </>
        )}
      </Box>

      <Heading>{post.title}</Heading>
      <Author>
        <Typography>
          Author: <Box component='span' style={{fontWeight:'600'}}>{post.username}</Box>
        </Typography>
        <Typography>{new Date(post.createdAt).toDateString()}</Typography>
      </Author>
      <Description>{post.description}</Description>
    </Container>
  );
};

export default DetailView;

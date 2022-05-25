import { useEffect, useState } from 'react'
import axios from 'axios';
import { postSlice } from '../chat/chatSlice';
import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import MessagePanel from '../chat/MessagePanel';
import MessageBar from '../chat/MessageBar';


const url_post = 'http://localhost:3000/posts';
const url_user_name = 'http://localhost:3000/users:';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const GetPosts = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {setExpanded(!expanded);};

  const [posts, setPosts] = useState([{
    id: 0,
    user_id: 0,
    text: '',
  }]);

  useEffect(() => {
    const fetchPostsOnLoad = async () => {
      try {
        const { data } = await axios.get(url_post)
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.log(error)
      }
    };
    fetchPostsOnLoad();
   }, []);

  const fetchPostsManual = async () => {
    try {
      const { data } = await axios.get(url_post)
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error)
    }
  };

  const fetchUserName = async (key: number) => {
    try {
      const { data } = await axios.get(url_user_name.concat(key.toString()))
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  };

  function UL<T>({
    items,
    render_name,
    render_text,
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > & {
    items: T[];
    render_name: (item: T) => React.ReactNode;
    render_text: (item: T) => React.ReactNode;
  }) {
    return (
      <ul style={{ margin: 0 }}>
        {items.map((item, index) => (
          <li style={{ margin: 0, padding: 0, }} key={index} >
            <Card sx={{ maxWidth: 900 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: purple[200] }} aria-label="recipe">
                    {render_name(item)}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={render_name(item)}
                subheader="Maj, 2022 (placeholder date)"
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {render_text(item)}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <MessagePanel></MessagePanel>
                  <MessageBar></MessageBar>
                </CardContent>
              </Collapse>
            </Card>
          </li>
        ))}
      </ul>
    );
  }


  return (
    <div style={{ width: '100%' }}>
      <UL
        items={posts}
        render_name={(data) => <>{data.user_id}</>}
        render_text={(data) => <>{data.text}</>}
      >
      </UL>
      <button className='btn' onClick={fetchPostsManual}>
        Update Posts
      </button>
    </div>
  )
}

export default GetPosts
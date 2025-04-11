import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useMutation } from '@apollo/client';
import { CREATE_BLOG_POST } from '../../services/mutations/createBlogPostMutation';

export const CreateBlogPostDialog = () => {
  const [createBlogPost, { loading }] = useMutation(CREATE_BLOG_POST, {
    refetchQueries: ['GetBlogPosts'],
    awaitRefetchQueries: true,
    onCompleted: () => {
      handleClose();
    },
  });

  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    title: '',
    author: '',
    content: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormValues({ title: '', author: '', content: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    createBlogPost({
      variables: {
        title: formValues.title,
        author: formValues.author,
        content: formValues.content,
      },
    });
    handleClose();
  };

  const textFeild = (
    id: string,
    lable: string,
    value: string,
    rows?: number
  ) => {
    return (
      <>
        <TextField
          required
          margin='dense'
          id={id}
          name={id}
          label={lable}
          type='text'
          fullWidth
          variant='standard'
          value={value}
          onChange={handleChange}
          color='error'
          multiline={!!rows}
          rows={rows}
        />
      </>
    );
  };

  return (
    <>
      <Button
        startIcon={<AddBoxIcon />}
        variant='contained'
        color='inherit'
        onClick={handleClickOpen}
      >
        Create a blog post
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create new blog post</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            {textFeild('title', 'Blog post title', formValues.title)}
            {textFeild('author', 'Author', formValues.author)}
            {textFeild('content', 'Content', formValues.content, 4)}
          </DialogContent>
          <DialogActions>
            <Button variant='outlined' color='inherit' onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant='contained'
              color='inherit'
              type='submit'
              loading={loading}
            >
              {'Create'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

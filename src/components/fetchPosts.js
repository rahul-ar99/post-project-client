import axios from 'axios';
import Cookies from 'js-cookie';

const fetchPosts = async () => {
  const token = Cookies.get('auth_token');

  if (!token) {
    console.error('Missing auth_token cookie. User might not be authenticated.');
    return null;
  }

  try {
    const response = await axios.post('http://localhost:8000/api/v1/posts/', {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    return null;
  }
};

export default fetchPosts
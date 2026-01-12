import api from "../api";

async function getBlogs(page) {
  try {
    const response = await api.get(`list_blogs?page=${page}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getBlogDetails(slug) {
  try {
    const response = await api.get(`blogs/${slug}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function registerUser(data) {
  try {
    const response = await api.post("register_user/", data);
    return response.data;
  } catch (error) {
    if (error.status === 400) {
      throw new Error("User already exists");
    }
    throw new Error(error.message);
  }
}

async function signin(data) {
  try {
    const response = await api.post("token/", data);
    return response.data;
  } catch (err) {
    if (err.status === 401) {
      throw new Error("Invalid Credentials");
    }

    throw new Error(err);
  }
}

async function getUsername() {
  try {
    const response = await api.get("get_username");
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function createBlog(data) {
  try {
    const response = await api.post("create_blog/", data);
    return response.data;
  } catch (err) {
    console.log("Error details:", err.response?.data);
    throw new Error(JSON.stringify(err.response?.data) || err.message);
  }
}

async function updateBlog(data, id) {
  try {
    const response = await api.put(`update_blog/${id}/`, data);
    return response.data;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response?.data?.message || "Failed to update blog");
    }

    throw new Error(err.message);
  }
}
async function deleteBlog(id) {
  try {
    const response = await api.delete(`delete_blog/${id}/`);
    return response.data;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response?.data?.message || "Failed to delete blog");
    }

    throw new Error(err.message);
  }
}

async function getUserInfo(username) {
  try {
    const response = await api.get(`get_userinfo/${username}`);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export {
  getBlogs,
  getBlogDetails,
  registerUser,
  signin,
  getUsername,
  createBlog,
  updateBlog,
  deleteBlog,
  getUserInfo,
};

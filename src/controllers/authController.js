const login = async (req, res) => {
  try {

    
    res.status(200).json({
      status: 1,
      message: "User logged in successfully",
    });
  } catch (error) {
    res.status(200).json({
      status: 0,
      message: "User logged in successfully",
    });
  }
};

export default { login };

const signIn = (req, res) => {
  res.status(200).json({ message: "user has logged in" });
};

module.exports = {
  signIn,
};

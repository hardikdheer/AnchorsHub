const User = require('./models/user');

module.exports = async function(req, res, next) {
  // Get email and OTP from the request body
  const { email, otp } = req.body;

  try {
    // Find user by email
    let user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }

    // Check if OTP matches
    if (user.otp !== otp) {
      return res.status(401).json({ msg: 'Invalid OTP' });
    }

    // If email and OTP are valid, add user to request object
    req.user = user;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
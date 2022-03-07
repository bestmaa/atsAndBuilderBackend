module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '232119bc3a2f528aa9637d6ff99b24ef'),
  },
});

const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const { OAuthStrategy, expressOauth } = require('@feathersjs/authentication-oauth');
const { v4: uuidv4 } = require('uuid');

class GoogleStrategy extends OAuthStrategy {
  async getEntityData(profile) {
  
    // this will set 'googleId'
    const baseData = await super.getEntityData(profile);
    // this will grab the picture and email address of the Google profile
    return {
      ...baseData,
      profilePicture: profile.picture,
      email: profile.email,
      password: uuidv4(),
      name: profile.given_name,
      lastName: profile.family_name
    };
  }
}

module.exports = app => {
  const authentication = new AuthenticationService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());
  authentication.register('google', new GoogleStrategy());

  app.use('/authentication', authentication);
  app.configure(expressOauth());
};

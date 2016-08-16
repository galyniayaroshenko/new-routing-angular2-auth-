import { $http } from './xhrFactory';
import { AppSettings } from '../../../../common/appSettings';

export const AuthFactory = {
 
  getAll: function(){
  	return $http.get(`${AppSettings.HOST}/users`);
  },
 
  save: function(user){
  	return $http.post(`${AppSettings.HOST}users`, user);
  },
  
  login: function(user){
  	return $http.post(`${AppSettings.HOST}auth/loginByEmail`, user);
  }

}
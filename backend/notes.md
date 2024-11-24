Add port and relevant in env file
backend port 4000
BACKEND_URI=http://localhost:4000/api makes it a conventional looking backend url

Asynch Handler is for baar baar try catch na likhna pade.

Express validator used for validating requests in body

Routes pe actions kya perform honge woh logic controllers mein daal do

COntrollers => Params mein req, res lete h , return response.

Index.js is the base for any folder, matlab iss folder ka main executable.

The statement router.use('/user', require('./user')) mounts the routes defined in the user.js file under the /user path. It imports a router (created using express.Router) from the user.js file, which typically contains user-related routes, and applies it as middleware. For example, if user.js defines a route for /profile, it will be accessible as /user/profile in the main app.

pehle middlewares pass kr diye, taki bich mein errors handle ho jayenge

syntax is router.route(route).get logic what is to be implemented in get ke andar
# MEAN Boiler Plate for Beginners


### Purpose:

To get Feeds with provided hashtag from Twitter and Page Posts from Facebook using AngularJS(1.x.x), ExpressJS and NodeJS.

### Prerequisites on Machine:

1. [Node JS](https://nodejs.org/en/download/)
2. `npm` (Node Package Manager) - Mostly gets installed at the time of nodejs installation
3. `bower` - If not then Install it using
    ```sh
    $ npm install bower -g
    ```
4. `git`(Repository Manager)
    ```sh
    $ sudo apt-get install git
    ```

### Steps To Execute:

1. Clone the Repo using
    ```sh
    $ git clone https://github.com/hardik2792/social-feeds.git
    ```

2. Open Terminal, change the path to cloned project.

3. Execute
    ```sh
    $ npm install
    ```

4. After completion of above steps follow below Step
    ```sh
    $ bower install
    ```

5. Now that, we have completed Application Setup an Application for Twitter as well as Facebook using developer Account
   and supply the required Secrets, Tokens, etc to `/config/appConfig.js`. NoW wE aRe Re@dY start the App.


6. After successful execution of above steps, follow final step to Start the server
    ```sh
    $ npm start
    ```

    OR you can have below step if you have nodemon installed

    ```sh
    $ npm test
    ```

6. Open your browser and paste the below Link

     `localhost:4000`

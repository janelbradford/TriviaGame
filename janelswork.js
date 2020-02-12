< !DOCTYPE html >
    <html lang="en">

        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                        <!--Import materialize.css-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
                        <title>Book Buddies</title>
</head>

                    <body class="green lighten-4">
                        <h1 class="orange-text center-align">BOOK BUDDIES</h1>
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="search" type="text" class="validate">
                                    <label class="active" for="search"><i class="material-icons left">search</i>Search</label>
        </div>
                            </div>

                            <div class="card small orange lighten-2">
                                <div class="card-image">
                                    <img src="../assets/images/librarypic.jpeg" alt="sloth" />
                                    <span class="card-title "></span>
                                </div>
                                <div class="card-content center-align">
                                    <p>
                                        <strong>find it, borrow it, read it</strong>
                                    </p>
                                </div>
                                <div class="card-action center-align">
                                    <a class="btn green lighten-4 orange-text modal-trigger" href="#modal2">
                                        <i class="material-icons left orange-text">create</i>SIGN IN
            </a>

                                    <!-- Modal Structure -->
            <div class="modal-footer">
                                        <a href="#!" class="modal-close waves-effect waves-green btn-flat"></a>
                                    </div>
                                </div>

                                <div id="modal2" class="modal">
                                    <div class="modal-content">
                                        <div class="row">
                                            <form class="col s12">
                                                <div class="row">
                                                    <div class="input-field col s6">
                                                        <input placeholder="Name" id="first_name" type="text" class="validate">
                                                            <label for="first_name">First Name</label>
                            </div>
                                                        <div class="input-field col s6">
                                                            <input id="last_name" type="text" class="validate">
                                                                <label for="last_name">Last Name</label>
                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="input-field col s12">
                                                            <input id="email" type="email" class="validate">
                                                                <label for="email">Email</label>
                                                                <div class="row">
                                                                    <div class="input-field col s12">
                                                                        <input id="password" type="password" class="validate">
                                                                            <label for="password">Password</label>
                                                                            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                                    <i class="material-icons">send</i> <a </div> </div> </div> </div> </div> </div>
                                                        </div> </form> </div> </div> <div class="modal-footer">
                                                <a href="#!" class="modal-close waves-effect waves-green btn-flat"></a>
                                            </div>

                                            <!-- *** -->
                            <div class="parallax-container">
                                                <div class="parallax">
                                                    <img src="../assets/images/librarypic.jpeg" />
                                                </div>
                                            </div>
                                            <nav>
                                                <div class="nav-wrapper  green lighten-4">
                                                    <a href="" class="brand-logo center orange-text center-align"><i
                                                        class="material-icons left">copyright</i>BOOK BUDDIES </a>
                                                    <!-- <ul id="nav-mobile" class="right hide-on-med-and-down">
                                                        <li>
                                                            <a target="blank" href="https://github.com/stappbot"><i
                                                                class="material-icons waves-effect">laptop_mac</i>Github</a>
                                                        </li>
                                                        <li>
                                                            <a target="blank" href="https://www.linkedin.com/in/jessicastapp/"><i
                                                                class="material-icons waves-effect">person</i>LinkedIn</a>
                                                        </li>
                                                        <li>
                                                            <a href="./assets/JessicaStappResume_2019.pdf"><i class="material-icons">attachment</i>
                                                                Resume</a>
                                                        </li>
                                                    </ul> -->
                                </div>
                                            </nav>


                                            <!-- Jquery -->
                            <script src="https://code.jquery.com/jquery-3.4.1.min.js"
                                                integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
                                                crossorigin="anonymous"></script>
                                            <!--JavaScript at end of body for optimized loading-->
                            <script
                                                src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

                                            <script>
                                                $(document).ready(function () {
                                                    $(".parallax").parallax();
                                            });
                                $(document).ready(function () {
                                                    $('.modal').modal();
                                            });
                                $(document).ready(function () {
                                                    $(".signIn").signIn();
                                            });
            
                            </script>

</body>

</html>
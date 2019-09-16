module.exports = () => {
    return `
<!DOCTYPE html>
<!--
This is the execution context.
Loaded within the iframe.
Reloaded before every execution run.
-->
<html>
<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
</head>
<body>
    <div id="app"></div>
    <input id="cpfCnpj" />
    <!-- The scripts need to be in the body DOM element, as some test running frameworks need the body
        to have already been created so they can insert their magic into it. For example, if loaded
        before body, Angular Scenario test framework fails to find the body and crashes and burns in
        an epic manner. -->
    <script src="context.js"></script>
    <script type="text/javascript">
    // Configure our Karma and set up bindings
    %CLIENT_CONFIG%
    window.__karma__.setupContext(window);

    // All served files with the latest timestamps
    %MAPPINGS%
    </script>
    <!-- Dynamically replaced with <script> tags -->
    %SCRIPTS%
    <!-- Since %SCRIPTS% might include modules, the 'loaded()' call needs to be in a module too.
    This ensures all the tests will have been declared before karma tries to run them. -->
    <script type="module">
    window.__karma__.loaded();
    </script>
    <script nomodule>
    window.__karma__.loaded();
    </script>
</body>
</html>
    
    `;
}
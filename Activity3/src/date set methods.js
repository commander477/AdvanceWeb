
<html>
<body>

<h2>JavaScript setFullYear()</h2>
<p>The setFullYear() method can optionally set month and day.</p>
<p>Please note that month counts from 0. December is month 11:</p>

<p id="demo"></p>

<script>
const d = new Date();
d.setFullYear(2020, 11, 3);
document.getElementById("demo").innerHTML = d;
</script>

</body>
</html>

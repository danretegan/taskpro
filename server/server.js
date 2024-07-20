import app from "./app.js";
import colors from 'colors';

app.listen(3000, () => {
  console.log(
    colors.bgBlue.italic.bold('Server is running. Use our API on port: 3000')
  );
});

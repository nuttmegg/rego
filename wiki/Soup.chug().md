checks if every entry passes a given check<br>
alternative to [Soup.swig()](https://github.com/shysolocup/stews/wiki/Soup.swig())<br>
type: `Function`

alt names:
- every()

<br>

arguments:
> - checker `Function`:<br>
> goes through every entry with the function<br>
> if it returns false then the chug returns false<br>
> see [Soup.forEach()](https://github.com/shysolocup/stews/wiki/Soup.forEach()) for more info

<br>

<table>
<tr>
<td> <b>list:</b> </td> <td> <b>pair:</b> </td>
</tr>
<tr>
<td>

```js
const { Soup } = require('stews');


let arr = new Soup([ "abc", 123 ]);


console.log(arr.chug( (v, i) => {
    // returns false because not every entry is number
    return typeof v == "number";
}));


console.log(arr.chug( (v, i) => {
    // returns true because every entry is not an object
    return typeof v != "object";
}));
```

</td>
<td>

```js
const { Soup } = require('stews');


let obj = new Soup({ key1: "abc", key2: 123 });


console.log(obj.chug( (k, v, i) => {
    // returns false because not every value is a number
    return typeof v == "number";
}));


console.log(obj.chug( (k, v, i) => {
    // returns true because every value is not an object
    return typeof v != "object";
}));
```

</td>
<tr>
<td>

```js
false
true
```

</td>
<td>

```js
false
true
```

</td>
</table>

### [source](https://github.com/shysolocup/stews/blob/main/src/Soup/functions/chug.js)

<br> <h1> [🢀 Back](https://github.com/shysolocup/stews/wiki/Soup-methods) </h1>
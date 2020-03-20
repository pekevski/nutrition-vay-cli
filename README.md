# nutrition-vay-cli
A NodeJS cli for the vay nutrition search api.

# Installation
```javascript
npm i nutrition-vay-cli
```

# How To Use
```
// setup your API KEY
$nutrition config --key 'YOUR API KEY'

// then search by name
$nutrition search --name "snickers"

//OR
$nutrition search --name "snickers" --key 'YOUR API KEY'



// use the help command for other help commands
$nutrition search help
```

# Example

The following command gives the following result table.

```
nutrition search --name "snickers" --key 'YOUR API KEY'

┌──────────┬────────────────────────────────────────┬─────────────────┬──────────────────────────────────────────────────────────────────┐
│ Id       │ Owner                                  │ UPC             │ Name                                                             │
├──────────┼────────────────────────────────────────┼─────────────────┼──────────────────────────────────────────────────────────────────┤
│ 503291   │ Mars Chocolate North America LLC       │ 40000494072     │ SNICKERS, SNICKERS                                               │
├──────────┼────────────────────────────────────────┼─────────────────┼──────────────────────────────────────────────────────────────────┤
│ 503307   │ Mars Chocolate North America LLC       │ 40000503781     │ SNICKERS, SNICKERS MINIS                                         │
├──────────┼────────────────────────────────────────┼─────────────────┼──────────────────────────────────────────────────────────────────┤
│ 344098   │                                        │ 0               │ SNICKERS Bar                                                     │
├──────────┼────────────────────────────────────────┼─────────────────┼──────────────────────────────────────────────────────────────────┤
│ 557863   │ Mars Chocolate North America LLC       │ 40000512554     │ SNICKERS, BARS                                                   │
├──────────┼────────────────────────────────────────┼─────────────────┼──────────────────────────────────────────────────────────────────┤
│ 513715   │ Mars Chocolate North America LLC       │ 40000493839     │ SNICKERS TREES                                                   │
├──────────┼────────────────────────────────────────┼─────────────────┼──────────────────────────────────────────────────────────────────┤
│ 534297   │ SIMPLY BALANCED                        │ 498780204112    │ SNACKERS                                                         │
├──────────┼────────────────────────────────────────┼─────────────────┼──────────────────────────────────────────────────────────────────┤
│ 568756   │ Safeway, Inc.                          │ 21130047116     │ SNACKERS                                                         │
├──────────┼────────────────────────────────────────┼─────────────────┼──────────────────────────────────────────────────────────────────┤
│ 595032   │ The Kroger Co.                         │ 11110892584     │ SNACKERS                                                         │
├──────────┼────────────────────────────────────────┼─────────────────┼──────────────────────────────────────────────────────────────────┤
│ 568753   │ Safeway, Inc.                          │ 21130047109     │ SNACKERS                                                         │
├──────────┼────────────────────────────────────────┼─────────────────┼──────────────────────────────────────────────────────────────────┤
│ 564857   │ Hormel Foods Corporation               │ 37600003643     │ SNACKERS                                                         │
└──────────┴────────────────────────────────────────┴─────────────────┴──────────────────────────────────────────────────────────────────┘
```

### Notes
Created as part of the 100 days coding challenge [here](https://vay.studio/100/). Also a good excuse to learn how to make a node cli.

### References
Excellent blog about learning how to create nodejs cli packages by Changhui Xu on [here](https://codeburst.io/build-a-command-line-interface-cli-application-with-node-js-59becec90e28)
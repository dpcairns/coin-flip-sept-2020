# coin-flip-sept-2020

Goal: Let the user choose heads or tails. Track their wins and losses (show as a percent)

STATE: 
- wins
- total
- _(losses are _derived state)_
- _(current user selection -- radio button does this for us)_

How do we SHOW this state?
- display it in divs' textContent property

HTML Elements we need to grab:
- State changers:
    - Coins (radio button)
        - Why? To GET the user GUESS
    - Submit button
        - Why? To confirm the user guess
- State viewers:
    - win span
        - show the wins
    - loss span
        - show the losses
    - percent span
        - show the percent

How/when do we CHANGE this state?
- when the user makes a selection and clicks the 'call it' button
    - on click, what happens?
        - 'flip the coin' and find out what side it landed on
        - get the user's guess
        - we determine if the user was right
            - if they were right, increment the wins AND increment total
            - if they were wrong, increment the total

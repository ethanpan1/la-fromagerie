Development README

The organization of my application is as follows:
  - Top level App class (not a React Component)
    - FilteredList (1)
      On the left side
      - Navbars (1, but with multiple Navbars in it)
      - DisplayList (1)
        - DisplayCard (12, one for each cheese on sale)
      On the right side
      - CartList (1)
        - CartCard (Number depends on number of cheeses in the cart)

I explain below why I believe this is the right organization.

How data is passed down:
  I pass down a lot of data through the components. Most crucially, the information on the cheeses is
  held in App and is passed down all the way to DisplayCard and CartCard, where the information is
  actually rendered as HTML elements. I kept this information in App to reduce clutter in 
  FilteredList, and conceptually, it makes sense that the information about what's on sale is kept
  separate from all of the functions and components that use that information. 

  I also pass down functions from FilteredList down to Navbars (filter and sort functions), 
  DisplayCard, and CartCard (add and remove functions). DisplayList and CartList have add and remove
  functions as well, but only to pass it down to the Card components. I used this structure because
  FilteredList must contain the functions that alter the lists of cheeses to be rendered in
  DisplayList and CartList. That is, Navbars controls the filter and sort applied, but DisplayList
  renders the filtered and sorted list. Similarly, DisplayCard and CartCard both have to be able to 
  add items, so that function has to be contained in their first common ancestor (FilteredList). 

  I considered creating general CardList and Card components to reduce the amount of components and 
  the amount of passing down required, but I realized that this would make the code extensible and 
  wouldrequire heavy and confusing usage of conditional operators. Thus, there is a significant 
  amount of data that is passed down from high level classes to low level classes. I believe that my
  organization strikes a good balance between factoring out common code and maintaining readability
  and extensibility.

How user input triggers state changes:
  The main component where state changes is FilteredList. FilteredList has state variables for the
  milk source filter chosen, the firmness filter chosen, the sort method chosen, the list of items in
  the cart, and the total price of the cart. All of the functions for setting these states are in
  FilteredList, but these functions are called in other components. The filters and sort method are
  selected using NavLinks in Navbars (the functions are called onSelect). The add and remove functions
  which increase and decrease the items and price of the cart are called onClick of buttons in 
  DisplayCard and CartCard. This user input is crucial because the DisplayCard/CartCard can pass
  the name, price, and other information about the specific cheese selected into the add and remove
  functions, allowing the app to keep track of, for example, exactly how much to increase or decrease
  the total price.
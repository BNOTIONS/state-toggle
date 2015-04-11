# State Toggle

*A utility to create relationships between elements without writing any custom Javascript.*

----

It is a routine situation to have an Interface that features two or more interface elements that have an effect on each other.

> *Click __this__ element, and something happens to __that__ element.*

Think: 

* lightboxes
* dropdown menus
* tooltips

In order to facilitate these common interactions, there are a number of utilities and plugins that can be used, but the interesting thing is that there is a common interaction to all of these situations:

> *When a user interacts with element __a__, something happens to element __b__*

 **State Toggle** remedies this situation by providing a single declarative solution that works for all of these scenarios without needing to write any Javascript.

All you need to do is:

* create your HTML as you normally would
* prepare your CSS for your *'before'* and *'after'* states
* implement some **State Toggle** attributes 

... and let the **State Toggle** tool look after the rest.

## Features

Behind the scenes, **State Toggle** handles:

* event binding of click events
* management of the state of the toggled element
* management of whether the trigger of the toggled element has been activated
* provision of hooks to control the appearance of triggers that have been activated
* scope control to be able to create multiple instances in an interface
* ability to control the default state of a toggle group

## State Toggle Attributes

Attribute | Function
--------- | --------
st-group | Does a thing
st-role | Does a thing
st-state | Does a thing
st-remove | Does a thing
st-contain | Does a thing
st-ready | Does a thing
st-restrict | Does a thing
st-default | Does a thing


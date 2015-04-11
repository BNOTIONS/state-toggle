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
* scope control to be able to create multiple instances in an interface, or contain the scope of interaction for whatever reason
* ability to control the default state of a toggle group

## State Toggle Attributes

Attribute | Function
--------- | --------
st-group | Declares elements are in a related group. Elements in the same group must have the same value set to this attribute.
st-role | Declares the role that the element plays in the interactive group. Value can be set to either __trigger__ or __target__.
st-state | Declares the state that should be toggled as a __class__ attribute on the *target*. This can be set to any value valid for a class attribute.
st-remove | Declares which __class__ attribute *state* should be removed from other elements in the interface when an element is triggered. This should be set to any relevant class attribute.
st-contain | Declares whether a State Toggle relationship has been scoped or contained (other elements not within the declared scope will not be affected). This can be set to any value (or left with no value).
st-ready | Declares whether or not the trigger is 'active' (if the trigger is able to toggle the target). This attribute can be set to the 'trigger' element and set to __false__ if disabled, or __true__ if enabled.
st-restrict | This can be applied to a trigger to declare whether the trigger is only able to toggle a target to either the 'off' or 'on' state. Valid values that this attribute can be set to are __on__ or __off__.
st-default | This can be set to the trigger element to declare whether the trigger should be in its __activate__ or __inactive__ state by default. Active triggers have the __class__ attribute set to __st-activated__.


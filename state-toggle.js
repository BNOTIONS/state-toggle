$(function() {

  var stateToggle = function(element, forceOn) {
    var $this = $(element),
    $scope = $this.parents('[st-contain]').length ? $this.parents('[st-contain]') : $(document),
    whichGroup = $this.attr('st-group'),
    $whichTriggers = $('[st-role="trigger"][st-group="' + whichGroup + '"]'),
    whichState = $this.attr('st-state'),
    stateRemove = $this.attr('st-remove'),
    isReady = $this.is('[st-ready]'),
    isRemove = $this.is('[st-remove]'),
    isRestricted = $this.is('[st-restrict]'),
    $toggleTarget = $scope.find('[st-role="target"][st-group="' + whichGroup + '"]'), 
    $removeTarget = $scope.find(stateRemove ? '.' + stateRemove.replace(" ", ".") : "" + '[st-role="target"]'),
    $inactiveTriggers = $scope.find('[st-remove="' + stateRemove + '"][st-role="trigger"]');

    if((isReady && ($this.attr('st-ready') === 'true')) || !isReady ){
        if(isRestricted){
          if($this.attr('st-restrict') === 'off'){
            $toggleTarget.removeClass(whichState);
            $whichTriggers.removeClass('st-activated');
          }
          else if($this.attr('st-restrict') === 'on'){
            $toggleTarget.addClass(whichState);
            $whichTriggers.addClass('st-activated');
          }
        }
        else {
          if(forceOn || !$this.hasClass('st-activated')){
            $inactiveTriggers.removeClass('st-activated');
            $this.addClass('st-activated');
          }
          else{
            $this.removeClass('st-activated');
            if(isRemove){
              $whichTriggers.addClass('st-activated');
            }
          }
          $removeTarget.removeClass(stateRemove);
          $toggleTarget.toggleClass(whichState);  
        }      
    }
  };

  $('[st-role="trigger"]').on('click',function(event){  
    event.stopPropagation();
    stateToggle(this, false);
  });

  $('[st-role="activate"]').on('click',function(){
    var whichToggle = $(this).attr('st-group');
    $('[st-role="trigger"][st-group="' + whichToggle + '"]').attr('st-ready','true');
  });

  $('[st-role="target"]').on('click',function(event){
    event.stopPropagation();
  });

  $('[st-default]').each(function(index){
    var defaultAttr = $(this).attr('st-default');
    if (defaultAttr === "on"){
      stateToggle(this, true);  
    }    
  });

});
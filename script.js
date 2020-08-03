function createNewItem(itemName){
    return $(`<li>
          <span class="shopping-item">${itemName}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`)
  }
  
  function addItemToList(event){
    event.preventDefault();
    const item = $(event.currentTarget).find('input[name="shopping-list-entry"]')
    const itemName= item.val();
    item.val("")
    const results = createNewItem(itemName);
   $(".shopping-list").append(results);
  }
  
  function toggleItem(event){
    $(event.currentTarget).closest("li").find(".shopping-item").toggleClass("shopping-item__checked")
  }
  
  function deleteItem(event){
   $(event.currentTarget).closest("li").remove()
  }
  
  function executeDeleteItem(){
  $(".shopping-list").on('click','.shopping-item-delete',deleteItem)
  }
  
  function executeNewItem(){
    $("#js-shopping-list-form").submit(addItemToList);
  }
  
  function executeCheckItem(){
    $(".shopping-list").on('click','.shopping-item-toggle',toggleItem)
  }
  
  function setUpEventHandlers(){
    executeNewItem();
    executeCheckItem();
    executeDeleteItem();
  }
  
  $(setUpEventHandlers);
  
  

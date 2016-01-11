import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

// Add Item
$('.addToDo').on('click', function() {
  let item = $('.newToDo').val();
  let template = '<li> <input id="box" type="checkbox" style="margin-right: 5px"> <span>' + item + '</span><button class="remove" style="color: red">x</button></li> ';
  $('.list').append(template);
  $('.newToDo').val('');
});

// Edit an Item
$('.list').on('click', 'span', function(){
  let item = $(this).text();
  $('.newToDo').val(item);

});


// Remove Item
$('.list').on('click', '.remove', function(){
  $(this).parent().remove();
});


// Check Item Off
$('.list').on('click', '#box', function() {
  $(this).parent().toggleClass('strike');
});


// Remove Completed Items
$('.clearComplete').on('click', function(){
  $('.strike').remove();
});

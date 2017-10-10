const servicesApi = require('./stackexchange-service');
const helper = require('../helpers/question_helper');

exports.getQuestions = (url,qParams) => {
  servicesApi.fetch(url,qParams).then(req =>{
    if(req.items !== null){
      let stack = [];
      req.items.map( item => {
        stack.push(`<div class="question">
          <div class="title">
            <h4><a href="#">${item.title}</a></h4>
          </div>
          <div class="tags">
            ${helper.tags(item.tags)}
          </div>
          <div class="author">asked ${helper.timeToWords(item.creation_date)}</div>
        </div>`);
      });
      document.querySelector('.container').insertAdjacentHTML('beforeend',stack.join(''));
    }
  });
}
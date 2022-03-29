import View from "./View.js";
import previewView from "./previewView.js";
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'Sorry but we could not find the recipe you are looking for! Please try again:D';
    _message = '';

    _generateMarkup() {
        return this._data.map(results => previewView.render(results, false)).join('');
    }
}

export default new ResultsView;
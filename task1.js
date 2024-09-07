class BookLibrary {
  #book = []
  constructor(){
    this.#book=[]
  }

  get allBook(){
    return this.#book
  }

  addBook(title){
    
    if(this.#book.includes(title)){
      throw new Error(`Книга "${title}" уже есть в библиотеке`)
    }
    else{
      console.log(`Книга "${title}" добавлена в библиотеку`);
      return this.#book.push(title)
    }
  }

  removeBook(title){
    
    
      if(this.#book.includes(title)){
        
        this.#book.pop(title)
         console.log(`Книга "${title}" удалена из библиотеки`);
      }
      else{
        throw new Error(`Книги "${title}" нет в библиотеке`);
      }
      
  }


}

console.log('start');

let library = new BookLibrary()
library.addBook('Стихи пушкина')
library.removeBook('Стихи пушкина')
library.addBook('Война и мир')
// console.log(allBook());
console.log(library);
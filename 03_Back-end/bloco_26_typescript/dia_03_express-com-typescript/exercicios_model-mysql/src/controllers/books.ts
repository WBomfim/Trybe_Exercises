import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import BookService from '../services/books';

class BooksController {
  constructor(private bookService = new BookService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    return res.status(StatusCodes.OK).json(books);
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const book = await this.bookService.getById(Number(id));
    if (!book) {
      return res.sendStatus(StatusCodes.NOT_FOUND).json({ message: 'Book not found!'});
    }
    return res.status(StatusCodes.OK).json(book);
  };

  public create = async (req: Request, res: Response) => {
    const book = req.body;
    const newBook = await this.bookService.create(book);
    return res.status(StatusCodes.CREATED).json(newBook);
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const book = req.body;
    const updatedBook = await this.bookService.update(Number(id), book);
    return res.status(StatusCodes.OK).json(updatedBook);
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.bookService.delete(Number(id));
    return res.status(StatusCodes.OK).json('Book deleted successfully');
  };
}

export default BooksController;
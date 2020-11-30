import { createConnection, getConnection, Connection } from 'typeorm';

export default class DataBase {
  /*
        returns typeorm Connection
    */
  public static async connect(): Promise<Connection | Error | any> {
    try {
      console.log('DB - establishing DB connection');
      return createConnection();
    } catch (error) {
      console.error('DB - error occurred while establishing DB connection,Please check your .evn', error);
    }
  }

  /*
        closes connection
    */
  public static async closeConnection(): Promise<void> {
    try {
      console.log('DB - closing DB connection');
      return getConnection().close();
    } catch (error) {
      console.error('DB - error occurred while establishing closing DB connection', error);
    }
  }

  /*
        return connection
    */
  public static getConnection(): Connection {
    console.log('DB - getting DB connection');
    return getConnection();
  }
}

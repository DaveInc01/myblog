import { Query } from 'mysql2/typings/mysql/lib/protocol/sequences/Query';
import db from '../models/db';

class IndexController {
    getAllBlogs() {
        db.query('SELECT * FROM blogs', (err, res) => {
            if(err) throw err;
            return res;
        });
    }
}

export default new IndexController();
import Button from "./Button";

function ProductTable() {
    return (
        <div className="container">
            <h2 className="table__heading">Products Management</h2>
            <div className="table__responsive">
                <table className="table table__striped">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Current Price</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr scope="row">
                            <td>1392</td>
                            <td>
                                <a href="#">James Yates</a>
                            </td>
                            <td>
                                Web Designer
                                <small className="d-block">
                                    Far far away, behind the word mountains
                                </small>
                            </td>
                            <td>+63 983 0962 971</td>
                            <td>NY University</td>
                            <td>
                                <Button type="btn--edit">Edit</Button>
                                <Button
                                    type="btn--delete"
                                    className="btn--no-margin"
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                        <tr scope="row">
                            <td>1392</td>
                            <td>
                                <a href="#">James Yates</a>
                            </td>
                            <td>
                                Web Designer
                                <small className="d-block">
                                    Far far away, behind the word mountains
                                </small>
                            </td>
                            <td>+63 983 0962 971</td>
                            <td>NY University</td>
                            <td>
                                <a href="#" className="more">
                                    Details
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductTable;

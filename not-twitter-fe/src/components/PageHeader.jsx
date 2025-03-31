function PageHeader(props) {
 return (   
    <div className="row">
        <div className="col-md">
            {props.error && <p className="text-danger">{props.error}</p>}
        </div>
    </div>
 )
}

export default PageHeader;

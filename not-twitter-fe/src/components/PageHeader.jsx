function PageHeader(props) {
 return (   
    <div className="row">
        <div className="col-sm-3">
            {props.error && <p className="text-danger">{props.error}</p>}
        </div>
        <div className="col-sm-6" />        
    </div>
 )
}

export default PageHeader;

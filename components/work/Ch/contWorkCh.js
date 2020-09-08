
class WorkCh extends React.Component {



    render(){

        return(
            <div className="work">
                <div className="work_ch">
                    <div className="work_ch_list">
                        <div className="work_ch_item">

                            <div className="work_ch_item_list_photo">

                                <div className="work_ch_item_list_photo_list">

                                    <div className="work_ch_item_list_photo_elem">
                                        <div className="view_ch_photo"><img src="img/word/del_photo.png" alt="1"/></div>
                                        <div className="name_ch_photo">2</div>
                                        <div className="del_ch_photo"><img src="img/word/del_photo.png" alt="1"/></div>
                                    </div>


                                </div>
                                <div className="work_ch_item_list_photo_butt">
                                    <img src="img/word/add_photo.png" alt="2"/>

                                </div>

                            </div>

                            <div className="work_ch_item_desc">
                                <div><input type="text"/></div>

                                <div><textarea name="text" id="text_desc" cols="20" rows="2">hello</textarea></div>

                                <div><textarea name="text" id="text_negative" cols="20" rows="2">hello</textarea></div>

                                <div><textarea name="text" id="text_positive" cols="20" rows="2">hello</textarea></div>
                            </div>

                            <div className="work_ch_item_butt">
                                <div><img src="img/word/del_photo.png" alt="1"/></div>
                                <div><img src="img/word/save.png" alt="1"/></div>
                                <div className="work_ch_butt_done disable"><img src="img/word/done.png" alt="1"/></div>
                            </div>
                        </div>

                    </div>


                    <div className="work_button">
                        <img src="img/word/add_photo.png" alt="2"/>
                    </div>
                </div>
            </div>
        )

    }
}
 export default WorkCh;

Search.setIndex({docnames:["conf","index","modules","quebap","quebap.load","quebap.projects","quebap.projects.autoread","quebap.projects.clozecompose","quebap.projects.inferbeddings","quebap.projects.memn","quebap.projects.playqa","quebap.projects.playqa.nein","quebap.projects.storycloze","quebap.util"],envversion:50,filenames:["conf.rst","index.rst","modules.rst","quebap.rst","quebap.load.rst","quebap.projects.rst","quebap.projects.autoread.rst","quebap.projects.clozecompose.rst","quebap.projects.inferbeddings.rst","quebap.projects.memn.rst","quebap.projects.playqa.rst","quebap.projects.playqa.nein.rst","quebap.projects.storycloze.rst","quebap.util.rst"],objects:{"":{quebap:[3,0,0,"-"]},"quebap.load":{FB15K2quebap:[4,0,0,"-"],SNLI2quebap_v1:[4,0,0,"-"],SNLI2quebap_v2:[4,0,0,"-"],cbt2quebap:[4,0,0,"-"],mctest2quebap:[4,0,0,"-"],read_quebap:[4,0,0,"-"],read_semeval2017Task10:[4,0,0,"-"],scienceQA2quebap:[4,0,0,"-"],sentihood2quebap:[4,0,0,"-"],simpleQuestions2quebap:[4,0,0,"-"],squad2quebap:[4,0,0,"-"],validate:[4,0,0,"-"]},"quebap.load.FB15K2quebap":{compress_triples:[4,1,1,""],convert:[4,1,1,""],extract_unique_entities_and_relations:[4,1,1,""],get_fact_neighbourhoods:[4,1,1,""],get_facts_per_entity:[4,1,1,""],get_facts_per_relation:[4,1,1,""],load_fb15k_triples:[4,1,1,""]},"quebap.load.SNLI2quebap_v1":{convert_snli:[4,1,1,""],main:[4,1,1,""]},"quebap.load.SNLI2quebap_v2":{convert_snli:[4,1,1,""],main:[4,1,1,""]},"quebap.load.cbt2quebap":{convert_cbtest:[4,1,1,""],load_cbt_file:[4,1,1,""],main:[4,1,1,""],parse_cbt_example:[4,1,1,""],split_cbt:[4,1,1,""]},"quebap.load.mctest2quebap":{clean_mctest_text:[4,1,1,""],convert_mctest:[4,1,1,""],main:[4,1,1,""],parse_mctest_instance:[4,1,1,""],parse_mctest_questions:[4,1,1,""]},"quebap.load.read_quebap":{Answer:[4,2,1,""],Question:[4,2,1,""],RichInstance:[4,2,1,""],Support:[4,2,1,""],quebap_load:[4,1,1,""],read_data:[4,1,1,""],read_rich_data:[4,1,1,""],token_pattern:[4,4,1,""]},"quebap.load.read_quebap.RichInstance":{question_support_pairs:[4,3,1,""],vocab:[4,3,1,""]},"quebap.load.read_quebap.Support":{token_from_char:[4,3,1,""]},"quebap.load.read_semeval2017Task10":{readAnn:[4,1,1,""]},"quebap.load.scienceQA2quebap":{convert_scienceCloze_to_quebap:[4,1,1,""]},"quebap.load.sentihood2quebap":{convert_to_quebap:[4,1,1,""],main:[4,1,1,""]},"quebap.load.simpleQuestions2quebap":{convert_simpleQuestions_to_quebap:[4,1,1,""],main:[4,1,1,""]},"quebap.load.squad2quebap":{convert_squad:[4,1,1,""],main:[4,1,1,""],parse_answer:[4,1,1,""],parse_question:[4,1,1,""],parse_support:[4,1,1,""]},"quebap.load.validate":{main:[4,1,1,""]},"quebap.pairwise_losses":{get_function:[3,1,1,""],hinge_loss:[3,1,1,""],logistic_loss:[3,1,1,""],mce_loss:[3,1,1,""],square_exponential_loss:[3,1,1,""],square_square_loss:[3,1,1,""]},"quebap.projects":{autoread:[6,0,0,"-"],clozecompose:[7,0,0,"-"],inferbeddings:[8,0,0,"-"],memn:[9,0,0,"-"],playqa:[10,0,0,"-"],storycloze:[12,0,0,"-"]},"quebap.projects.autoread":{autoreader:[6,0,0,"-"],ptb:[6,0,0,"-"],sampler_for:[6,1,1,""],scratch:[6,0,0,"-"],util:[6,0,0,"-"]},"quebap.projects.autoread.autoreader":{AutoReader:[6,2,1,""],ParallelInputRNNCell:[6,2,1,""]},"quebap.projects.autoread.autoreader.AutoReader":{create_from_config:[6,5,1,""],load_vocab:[6,5,1,""],run:[6,3,1,""],symbolizer:[6,3,1,""],unsupervised_loss:[6,3,1,""],vocab_to_ixmap:[6,5,1,""]},"quebap.projects.autoread.autoreader.ParallelInputRNNCell":{output_size:[6,6,1,""],state_size:[6,6,1,""],zero_state:[6,3,1,""]},"quebap.projects.autoread.util":{init_with_word_embeddings:[6,1,1,""]},"quebap.projects.inferbeddings":{sampling:[8,0,0,"-"]},"quebap.projects.inferbeddings.sampling":{random_truncated_exponential:[8,1,1,""]},"quebap.projects.memn":{data_utils:[9,0,0,"-"],data_utils_quebap:[9,0,0,"-"]},"quebap.projects.memn.data_utils":{get_stories:[9,1,1,""],load_task:[9,1,1,""],parse_stories:[9,1,1,""],tokenize:[9,1,1,""],vectorize_data:[9,1,1,""]},"quebap.projects.memn.data_utils_quebap":{get_stories:[9,1,1,""],load_task:[9,1,1,""],parse_stories:[9,1,1,""],vectorize_data:[9,1,1,""]},"quebap.projects.playqa":{model:[10,0,0,"-"],util:[10,0,0,"-"]},"quebap.projects.playqa.model":{Model1:[10,2,1,""],ProofStep:[10,2,1,""],Transformation:[10,2,1,""],tok:[10,1,1,""]},"quebap.projects.playqa.model.Model1":{decode:[10,3,1,""],decode_kb:[10,3,1,""],embed_statements:[10,3,1,""],inference_steps:[10,3,1,""],match_all:[10,3,1,""],query:[10,3,1,""],query_all_decoded:[10,3,1,""],query_iteratively_decoded:[10,3,1,""],repr_text_batch:[10,3,1,""],simple_extract_or_translate:[10,3,1,""],to_feed_dict:[10,3,1,""],to_kb_strings:[10,3,1,""],to_strings:[10,3,1,""]},"quebap.projects.playqa.model.ProofStep":{current_question:[10,6,1,""],extractions:[10,6,1,""],questions:[10,6,1,""],terminate_prob:[10,6,1,""]},"quebap.projects.playqa.model.Transformation":{summarized:[10,6,1,""],summarized_decoded:[10,6,1,""],total_score:[10,6,1,""],transformation_probs:[10,6,1,""],transformations:[10,6,1,""]},"quebap.projects.playqa.util":{CompactifyCell:[10,2,1,""],to_inputs:[10,1,1,""]},"quebap.projects.playqa.util.CompactifyCell":{output_size:[10,6,1,""],state_size:[10,6,1,""],zero_state:[10,3,1,""]},"quebap.projects.storycloze":{assignment3:[12,0,0,"-"],assignment3_models:[12,0,0,"-"]},"quebap.projects.storycloze.assignment3":{load_corpus:[12,1,1,""],permutation_index:[12,1,1,""],pipeline:[12,1,1,""]},"quebap.projects.storycloze.assignment3_models":{get_basic_model:[12,1,1,""],get_bowv_model:[12,1,1,""],get_permute_model:[12,1,1,""],get_selective_model:[12,1,1,""]},"quebap.training_pipeline":{Duration:[3,2,1,""],main:[3,1,1,""],quebap_load:[3,1,1,""]},"quebap.util":{tfutil:[13,0,0,"-"]},"quebap.util.tfutil":{gather_in_dim:[13,1,1,""],get_by_index:[13,1,1,""],get_last:[13,1,1,""],mask_for_lengths:[13,1,1,""],tfprint:[13,1,1,""],tfprints:[13,1,1,""],tfprintshape:[13,1,1,""],tfprintshapes:[13,1,1,""],tfrun:[13,1,1,""],tfrunprint:[13,1,1,""],tfrunprintshape:[13,1,1,""],unit_length:[13,1,1,""]},quebap:{load:[4,0,0,"-"],pairwise_losses:[3,0,0,"-"],projects:[5,0,0,"-"],training_pipeline:[3,0,0,"-"],util:[13,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","data","Python data"],"5":["py","staticmethod","Python static method"],"6":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:data","5":"py:staticmethod","6":"py:attribute"},terms:{"0_dev":4,"0_test":4,"0_train":4,"1st":[],"300d":[],"42b":[],"\u2081":[],"\u2082":[],"abstract":[],"boolean":4,"case":[],"class":[3,4,6,10],"default":6,"final":[],"float":[],"function":[4,6],"import":[],"int":13,"new":[],"return":[3,4,6,8,9,13],"static":6,"switch":[],"true":[4,6,9,10,12,13],EOS:[],For:[],IDs:4,Its:[],SOS:[],The:[4,9],Their:[],Then:[],There:9,These:[],Use:[],___:[],____:[],__call__:[],__init__:[],__iter__:[],__len__:[],_id:[],_initi:[],_normal:[],_sre:4,abov:4,abs:[],accord:[],account:[],accuracyhook:[],action:[],activation_fn:[],adam:[],adamoptim:[],add:[],add_gradient_nois:[],add_iter:[],add_word:[],added:[],adding:[],addit:6,adict:4,advanc:[],affect:[],afraid:[],after:[],again:[],agent:[3,5,10],agre:[],algorithm:[],alia:10,all:[4,6],allow:4,along:[],alphanumer:6,also:4,alwai:[],always_in:[],among:[],ani:9,ann:4,anoth:[],ans_chunk:4,ans_fil:4,ans_nam:[],ans_tab:4,answ:[],answer:[4,9],answer_alt:4,answer_break:[],answer_dict:4,answer_id:[],answer_kei:[],answer_loc:[],answer_sequ:[],answer_string_sequ:[],answer_vocab_s:[],appear:4,appl:9,appli:6,appropri:[],arg1:4,arg2:4,arg:[],argmax:[],argument:4,around:[],arrai:9,array1:[],array2:[],array3:[],array4:[],arxiv:[],ascii:6,assignment3:[3,5],assignment3_model:[3,5],assum:[],at_epoch:[],at_epoch_end:[],at_every_epoch:[],at_iteration_end:[],atom2str:[],atom2struct:[],atom:[],attend:[],attent:[],attention_decod:[],attention_st:[],attentiveanswerseq2seqmodel:[],attentiveseq2seqmodel:[],attn_length:[],attn_siz:[],attribut:4,author:[],autom:[],automat:[],autoread:[3,5],avail:[],averag:[],average_across_batch:[],average_across_timestep:[],average_precis:[],babi:9,back:[],backward:[],bag:[],bag_read:[],base:[3,4,6,10],base_vocab:[],basic:[],basic_rnn_seq2seq:[],batch:[2,3,6],batch_fit:[],batch_funct:[],batch_siz:[6,10,13],batch_size_fix:[],batcher:[],batches_per_epoch:[],batchsampl:[],batchsiz:[],batchwis:[],beam_attention_decod:[],beam_rnn_decod:[],beam_search:[],beam_siz:[],becaus:4,becom:13,befor:13,behavior:[],below:[],beta:[],between:4,bias:[],bidirect:[],bilstm_nosupport_reader_model_with_cand:[],bilstm_read:[],bilstm_reader_model_with_cand:[],bin:6,blah:[],bleh:[],bluh:[],bob:9,bodi:[],boe_nosupport_cands_reader_model:[],boe_read:[],boe_reader_model:[],boe_support_cands_reader_model:[],boenosupport_reader_model:[],boi:[],book:4,bool:6,bord:4,both:4,boundari:[],break_level:[],bucket:[],bucket_ord:[],bucket_structur:[],build:[],byteord:[],cach:[],cache_fun:[],calcul:[],call:4,can:4,cand:[],candid:4,candidate_alt:4,candidate_kei:[],candidate_vocab:[],cands_nam:[],cannot:[],captionid:4,care:[],castl:[],categori:4,caution:[],cbt2quebap:[2,3],cbt:4,cbtest_cn_train:4,cell:6,cell_output:[],chang:[],char_offset:4,charact:6,check:[],children:4,clan:[],classif:3,clean_mctest_text:4,clean_word:6,client:[],clip:[],clip_by_norm:[],clip_by_valu:[],clip_op:[],close:[],cloze2sort:[3,5],cloze_nois:6,clozecompos:[3,5],collaps:[],collect:4,column:[],com:3,combin:[],come:[],common:4,compact:[],compactifycel:10,complex:[],compon:[4,8],composit:6,comprehend:[],compress_tripl:4,comput:[],concat_seq:12,concaten:[],condit:[],conditional_attentive_read:[],conditional_read:[],conditional_reader_model:[],conditional_reader_model_with_cand:[],conf:[1,2],config:6,conj:4,connect:[],consid:4,consist:4,constant:[],construct:[],contain:[3,4,6,9],contains_word:[],content:[1,2],context:[],contextbatchsampl:[],control:[],conveni:[],convert:[4,9],convert_cbtest:4,convert_mctest:4,convert_sciencecloze_to_quebap:4,convert_simplequestions_to_quebap:4,convert_snli:4,convert_squad:4,convert_to_quebap:4,corpu:[4,12],correct:4,correspond:4,cost:[],count:[],count_oov:[],count_pretrain:[],creat:[4,6,13],create_dummpy_scienceqa:[2,3],create_from_config:6,create_placehold:[],create_test_quebap:[],create_train_quebap:[],cross:[],current:[],current_it:[],current_quest:10,current_step:[],cut:[],data1:[],data1_id:[],data1_ids_with_length:[],data1_low:[],data1_token:[],data2:[],data2_id:[],data2_ids_with_length:[],data2_process:[],data2_token:[],data:[4,6,9],data_dir:9,data_filenam:4,data_util:[3,5],data_utils_quebap:[3,5],datafil:4,dataset:[4,6],dave:[],dave_length:[],decod:10,decode_answ:10,decode_kb:10,decode_model_with_bucket:[],decoder_input:[],decor:[],deeo_map:[],deep_map:[],deep_seq_map:[],deepest:[],def:[],default_kei:[],default_unk:[],defin:[4,13],define_model_f_scor:[],delet:[],delim:4,denot:[],depend:[],describ:[],desir:[],detail:[],determin:[],dev:[],dev_fil:9,deviat:[],devic:6,dict:6,dictionari:[4,6],diff:[],differ:4,dim1:13,dim2:13,dim3:13,dim:[6,8,13],dimens:13,dimension:[],dir:[],direct:[],directori:[],discard:9,discret:[],distribut:8,divid:[],dlist:[],docstr:[],doctest:[],document:6,document_sequ:[],doe:4,doing:13,doku:4,dot:[],dot_product:[],drawn:[],drop:9,drop_keep_drop:[],drop_keep_prob:[],dropout:[6,12],dtype:[6,10],duard:[],dull:[],dummi:[],dump_all_tokens_to_fil:[],duo:[],durat:3,dure:[],dynam:[],dynamic_subsampl:[],dynamicsubsampledlist:[],e2_indic:[],each:[4,8],edu:4,effect:[],either:[],elem:[],element:[],els:13,email:[],emb:12,embed:[3,4,6],embed_stat:10,embed_symbol:[],embedded_answ:[],embedded_context:[],embedded_quest:[],embedding_attention_decod:[],embedding_attention_seq2seq:[],embedding_lookup:[],embedding_matrix:[],embedding_rnn_decod:[],embedding_rnn_seq2seq:[],embedding_s:[],empti:9,emul:[],encod:9,encoder_input:[],encoder_inputsut:[],encoder_output:[],encount:[],end:[],engin:[3,5],entir:[],entiti:4,entity_pair_embed:[],entity_pair_lexicon:[],entri:[],entropi:[],epoch:[],epoch_batch:[],equival:[],error:3,especi:[],estim:[],eta:[],etahook:[],etc:[],eval:[3,5],evalhook:[],evalu:[3,5],even:[],everest:4,everi:[],everyth:13,exampl:3,examplespersechook:[],except:[],exclus:[],exdb:3,exe:4,execut:[],exhaust:4,expand:[],explan:[],explicit:[],exponenti:[3,8],extra:[],extract:[4,10],extract_unique_entities_and_rel:4,fact:4,fact_neighbourhood:4,facts_per_ent:4,facts_per_rel:4,fals:[4,6,9,10,12],false_scor:[],famili:[],fb15k2quebap:[2,3],fb15k:4,featur:[],fed:[],feed:[],feed_dict:[],feed_previ:[],fetch:4,few:[],field:10,file:[4,6,9],file_path:4,filenam:[],filepath:[],fill:9,first:[],fix:4,float32:[],fname:6,focus:[],follow:[],form:4,format:[4,6,9],forward:[],forward_onli:6,found:[],four:4,freez:12,frequenc:[],from:[4,6,8],frozen:[],frozenidentifi:[],full:[],full_match_answer_loc:[],fulli:[],fun:13,fun_nam:[],function_nam:3,gamma:3,gatedseq2seqmodel:[],gather:13,gather_in_dim:13,gaussian:[],gen_data:[2,3],genealog:[],gener:4,generatorwithrestart:[],get:4,get_all_word:[],get_basic_model:12,get_batch:[],get_bowv_model:12,get_bucket:[],get_by_index:13,get_embedding_matrix:[],get_entry_dim:[],get_fact_neighbourhood:4,get_facts_per_ent:4,get_facts_per_rel:4,get_feed_dict:[],get_funct:3,get_id:[],get_ids_oov:[],get_ids_pretrain:[],get_idx_by_word:[],get_last:13,get_list_shap:[],get_param_id:[],get_permute_model:12,get_selective_model:12,get_seq_depth:[],get_siz:[],get_stori:9,get_sym:[],get_timestamped_dir:[],get_total_trainable_vari:[],get_total_vari:[],get_word2vec_vocabulari:[],get_word_by_idx:[],get_word_count:[],give:[],given:[4,9],glove:[3,4,6],goal:6,gold:4,gold_label:[],good:[],googlenew:6,gradient:[],grandparentof:[],greedi:[],ground:[],gru:6,grucel:[],half:[],happen:[],has:[],have:4,hds:4,head:[],hello:[],henc:[],heraldri:[],here:[],hidden:[],high:[],highest:[],hing:3,hinge_loss:3,histori:[],hold:4,hook:[2,3],hop:[],hot:9,how:[],how_mani:[],howev:4,http:[3,4],human:[],hyper:3,hypothesi:4,ident:[],identifi:4,ids:4,idx2word:[],idx:[],ignor:[],implement:[],includ:[4,9],include_rel:4,inclus:[],indep:[],independ:8,index:[1,13],indic:[4,10,13],infer:[],inferbed:[3,5],inference_step:10,influenc:[],info:[],inform:4,init_with_word_embed:6,initi:6,initial_st:[],initial_state_attent:[],initialis:[],initialize_embed:[],inner:[],input:[4,10],input_dim:10,input_s:12,instanc:4,instanti:[],instead:[],int32:13,int64:13,integ:[],integr:[],interfac:[],intern:[],interpret:[],interv:4,invers:8,is_train:6,isconst:[],isfact:[],isinst:[],isl:[],isparam:[],isplacehold:[],isvar:[],item:[],iter:4,iter_interv:[],iter_per_epoch:[],itr:[],its:[],itself:[],jack:[],jack_length:[],join:[],joint:[3,5],json:4,jsonfil:9,jsonl:4,jth:[],just:4,keep:6,keep_prob:[],kei:[],kept:9,key_by_id:[],kwarg:[],kwd:[],label:4,lambda:[],lang:[3,5],larger:[],largest:[],last:[],latent:[],later:[],layer:12,learn:[],learning_r:6,least:4,lecun:3,legend:[],len:[],length:[6,9,13],less:[],level:[],lexica:[],lib:4,librari:[],like:[],likelihood:[],line:9,linear:[],link:[],list:4,load:[2,3,6,9],load_cbt_fil:4,load_corpu:12,load_embed:[],load_fb15k_tripl:4,load_glov:[],load_kwarg:6,load_naacl2013:[],load_task:9,load_test_data_from_from_quebap:[],load_train_data_from_quebap:[],load_vocab:6,load_word2vec:[],load_wordreps_from_vocabulari:[],loader:4,loadmodelhook:[],locat:[],log:3,logist:3,logistic_loss:3,logit:6,longer:9,look:4,lookup:[],loop_funct:[],loss:3,losshook:[],low:[],lower:[],lowercas:[],lowest:[],ls2quebap:[2,3],lstm:[],machin:[],maclean:[],mai:[],main:[3,4],make:4,manag:4,mani:[],map:[2,3,4],margin:3,mask:[10,13],mask_for_length:13,mask_right:13,match_al:10,matrix:8,max_answer_length:[],max_answer_vocab:[],max_compact_length:10,max_context_length:[],max_count:[3,4],max_epoch:[],max_grad_norm:[],max_it:[],max_length:[9,13],max_list_len:[],max_num_token:10,max_question_length:[],max_seq_length:6,max_step:10,max_vocab:[],max_vocab_s:6,maxim:[],mce:3,mce_loss:3,mctest2quebap:[2,3],mean:[],mean_ab:[],mechan:[],media:4,memn2n:[3,5,9],memn2n_quebap:[3,5],memn:[3,5],memori:9,memory_s:9,messag:[],metadata:4,method:[],metric:[],min_freq:[],minimum:3,mix:[],mln:[3,5],mode:4,model1:10,model:[2,3,4,5],model_with_bucket:[],modelf:[3,5],modelf_nyt:[3,5],models_np:[],modul:[1,2],mostli:6,mull:[],multi:4,multipl:4,multipli:[],my_seq2seq:[3,5,6],n_entity_pair:[],n_i:3,n_instanc:[],n_iter:[],n_relat:[],naacl2013:[],naacl2013_mod:[],name:[4,6,9,12,13],ndarrai:[],need:4,neg:3,negative300:6,negative_domain_s:[],negative_scor:3,negsampl:[],neighbour:4,neighbourhood:4,nein:[3,5,10],nest:4,network:[],neural:[],neural_test1:[],neural_test2:[],neuralvocab:[],new_attn:[],new_stat:[],newli:[],newline_token:[],next:[],nil_slot:[],nll_loss:[],nlp:4,node:[],nois:[],non:6,none:[3,4,6,10,12,13],nonlin:[],norm:[],normal:6,normalis:[],normalize_rul:[],note:4,noun:4,now:[],nprint:[],nth:9,num_decoder_symbol:[],num_encoder_symbol:[],num_head:[],num_row:8,num_sampl:8,num_step:10,num_symbol:[],num_train_chunk:[],num_valid_chunk:[],number:[8,10],numer:[],numpi:[],numpifi:[],nvocab:12,nyt2quebap:[3,5],nyt:[],object:[3,4],obtain:4,off:[],often:[],omit:[],one:9,ones:[],onli:[4,6,9],only_support:9,onto:[],open:4,oper:[],ops:[6,10],optim:[],optimis:[],optin:4,option:[3,4],order:[],org:[],origin:4,other:[],otherwis:[],out:[],output:6,output_dim:6,output_project:[],output_s:[6,10,12],over:[],overwrit:[],p_i:3,packag:[1,2],pad:9,page:1,pair:4,pairwis:3,pairwise_loss:2,paper:4,para_dict:4,paragraph_break:[],parallelinputrnncel:6,param:[4,8,13],paramet:[3,4,6,13],parentof:[],pars:9,parse_answ:4,parse_cbt_exampl:4,parse_mctest_inst:4,parse_mctest_quest:4,parse_quest:4,parse_stori:9,parse_support:4,part1:4,part2:4,part:4,particip:4,particular:[],partit:[],pass:6,past:[],path:[3,4,6],pattern:[],pdf:3,penalti:[],per:4,per_example_loss:[],perform:[],period:[],permutation_index:12,perplex:[],php:4,pipelin:[2,3,12],place:[],placehold:[],placeholder2ix:[],plai:[],platform:[],playqa:[3,5],point:[],pontu:[],posit:[3,8],position_encod:[],positive_scor:3,possibl:6,post_run:[],ppdb:4,pprint:[],pre:[],pre_run:[],precis:[],precision_at_x:[],predefin:[],predic:[],predict:4,predict_log_proba:[],predict_proba:[],predictor:[],prefix:13,premis:4,preposit:4,preprocess:[3,5,6],preprocess_files_recurs:[],present:[],pretrain:[],prev:[],prev_attn:[],prev_stat:[],previou:[],previous:[],previous_output:[],prf1hook:[],princip:[],print:[],print_detail:[],print_to:[],printopt:[],probabl:8,procedur:[],process:[],produc:8,product:[],project:[2,3,4],projectionwrapp:[],proofstep:10,propabl:[],propag:[],proven:[],provid:[4,9],prune:[],ptb:[3,5],publi:3,punctuat:9,pure:[],purpos:4,python3:[],python:[6,10,13],qa_dict:4,qa_set:[],qaseq2seqmodel:[],qaset:[],qconditionedseq2seqmodel:[],qdict:4,quebap_load:[3,4],quebap_map_to_target:[],queri:[9,10],query_all_decod:10,query_iteratively_decod:10,question:[4,10],question_alt:4,question_length:[],question_list:4,question_sequ:[],question_string_sequ:[],question_support_pair:4,rais:[],rand:[],randint:[],random:[],random_integ:[],random_truncated_exponenti:8,rang:[],rank:[],raw:4,raw_answ:[],raw_answer_id:[],raw_data:4,read:[4,9],read_data:4,read_quebap:[2,3],read_rich_data:4,read_semeval2017task10:[2,3],readann:4,reader:[],realli:[],recal:[],receiv:4,reciproc:[],recognit:[],recommend:[],recurr:[],recurs:[],reduced_input_s:[],refer:4,regex:[],relat:4,relation_embed:[],relation_indic:[],relation_lexicon:[],relu:[],remain:[],remov:4,renam:[],replac:[],repli:[],repr_text_batch:10,repres:[],represent:[],respect:8,rest:13,result:[],resum:[],retain:[],retriev:9,richinst:4,rnn:[],rnn_cell:[6,10],rnn_decod:[],rnncell:[6,10],row:8,rule2str:[],rule2struct:[],rule2tupl:[],rule:[],run:6,sai:[],said:[],same:[3,4,5,13],sampl:[3,5],sampler:[3,5,6],sampler_for:6,savemodelhook:[],scalar:[],scenario:[],scienceqa2quebap:[2,3],scienceqafil:4,scope:[],score:3,scratch:[3,5],sdict:4,search:1,sec:[],second:[],section:[],see:[],seed:[],seem:4,seen:[],self:[],semeval2017task10:4,sent:9,sentenc:9,sentence1:4,sentence1_length:[],sentence2:4,sentence2_length:[],sentence_break:[],sentence_length:[],sentence_s:9,sentihood2quebap:[2,3],sentihood_data:4,seq1:[],seq1_length:[],seq2:[],seq2_length:[],seq2seq:[],seq2seq_model:[3,5,6],seq:[],sequenc:[],sequence_loss:[],sequence_loss_by_exampl:[],serv:[],sess:6,session:6,set:4,set_ev:[],set_train:[],settlement:[],shape2str:[],shape:[],share:4,shift:[],should:[4,6],shouldn:6,show_shap:[],shuffl:[],side:[],sigma:3,sign:[],signatur:[],similar:[],simpl:[],simple_extract_or_transl:10,simple_pipelin:[],simplequestionfil:4,simplequestions2quebap:[2,3],sinc:[],singl:[3,4,5],sisypho:[2,3],size:6,slice:13,slot:[],smaller:[],snli2quebap_v1:[2,3],snli2quebap_v2:[2,3],snli:4,snli_1:4,snli_file_json:4,snli_file_jsonl:4,snlitrain:4,softmax:[],softmax_loss_funct:[],some:[],sorri:[],sort:[],sourc:4,span:4,specif:[],specifi:4,speech:[],split:4,split_cbt:4,squad2quebap:[2,3],squar:3,square_exponential_loss:3,square_square_loss:3,sre_pattern:4,standard:[],stanford:4,start:[],start_stat:[],state:[],state_s:[6,10],statement:10,stddev:[],stenetorp:[],step:[],store:[],stori:9,storycloz:[3,5],str:[],stream:[],string:[4,6,10],string_sequ:[],string_tripl:4,struct:[3,5],structur:[],stuff:[],sub_struct2str:[],sub_struct:[],subgraph:[],subject:4,submodul:[2,5],subpackag:2,subsampl:[],suffix:13,suitabl:4,sum:[],sum_i:3,summar:10,summari:[],summarized_decod:10,summary_writ:[],superstit:[],suppli:9,support:[4,9],support_alt:4,support_length:[],surpress:[],sym2id:[],sym:[],symbol:6,symbold:[],tag:[],take:[],taken:[],tanh:[],target:6,target_s:12,target_vocab:12,task:9,task_id:9,teach:[],temporarili:[],tensor:[3,5,8,13],tensorflow:[6,10],tensorhook:[],tensorlist:[],tensowflow:[],term:[],terminate_prob:10,test:[4,9],test_cbt:[2,3],test_entity_pair:[],test_evalu:[3,5],test_fil:9,test_procedur:[],test_reciprocal_rank:[],test_tensor:2,testfact:[],text:[4,10],textbatchsampl:[],textfold:4,tfprint:13,tfprintshap:13,tfrecord_featur:[],tfrun:13,tfrunprint:13,tfrunprintshap:13,tfutil:[2,3],tgz:4,than:9,thei:4,thi:[4,13],thing:[4,13],those:4,though:[],three:4,through:[],thu:[],time:[],timestamp:[],timestep:[],titl:[],to_feed_dict:10,to_input:10,to_kb_str:10,to_sample_from:[],to_str:10,todo:4,togeth:[],tok:10,token:[4,9],token_from_char:4,token_pattern:4,top:[],total:9,total_scor:10,tra1:[],tracehook:[],train:[2,3,4,5,9],train_fil:9,train_pretrain:[],trainabl:[],trainfact:[],training_data:[],training_pipelin:2,trans:4,transform:[4,10],transformation_prob:10,translat:4,trf:[],tripl:4,true_rank:[],true_scor:[],truncat:8,tsv_chunk:4,tsv_file:4,ttt:[2,3],tupl:[9,10],turn:[],tutori:[],two:[],txt:4,typ:[],type:4,type_sequ:[],unchang:[],under:4,unfreez:[],unfrozen:[],uniform:[],uniformli:[],uniqu:4,unique_ent:4,unique_rel:4,unit:6,unit_length:13,unit_length_transform:[],unit_norm:[],unk:[],unk_id:6,unknown:[],unless:[],unset:[],unsupervis:[],unsupervised_loss:6,updat:[],update_embedding_for_previ:[],update_summari:[],upper:[],usag:4,use:4,use_permutation_index:12,use_pretrain:[],used:[],useful:6,user:4,uses:[],using:8,utc:4,util:[2,3,5],valid:[2,3],valu:[3,6,13],valueerror:[],variabl:[],variable_scop:[],variablescop:[],variou:[],varlenfeatur:[],vector:[6,8,9],vectorize_data:9,verb:4,veri:[],versa:13,version:[],via:[],vice:13,vocab1:[],vocab2:[],vocab:[2,3,4,6,12],vocab_s:[6,12],vocab_to_ixmap:6,vocabulari:[3,4],wake:[],want:4,warn:6,web:[3,5,10],webpag:4,weight:8,well:4,when:4,where:[6,8,9],wherebi:4,whether:4,which:4,why:[],wikipedia:[3,5,6],wikiread:[3,5,6],wish:[],with_attent:[],within:[],without:[],word2idx:[],word2vec:6,word2vec_bin:6,word:[],word_freq:[],word_idx:9,word_to_vec:[3,4],wordnet:4,work:[],world:[],would:[],wrapper:[],writer:[],wrong:[],xss:[],xxx:[],yann:3,yield:4,you:6,zero:[4,13],zero_nil_slot:[],zero_result:10,zero_st:[6,10],zip:4},titles:["conf module","Welcome to quebap&#8217;s documentation!","quebap","quebap package","quebap.load package","quebap.projects package","quebap.projects.autoread package","quebap.projects.clozecompose package","quebap.projects.inferbeddings package","quebap.projects.memn package","quebap.projects.playqa package","quebap.projects.playqa.nein package","quebap.projects.storycloze package","quebap.util package"],titleterms:{agent:11,assignment3:12,assignment3_model:12,autoread:6,batch:[],cbt2quebap:4,cloze2sort:12,clozecompos:7,conf:0,content:[3,4,5,6,7,8,9,10,11,12,13],create_dummpy_scienceqa:4,data_util:9,data_utils_quebap:9,document:1,embed:[],engin:8,eval:6,evalu:[],exampl:[],fb15k2quebap:4,gen_data:13,glove:[],hook:[],indic:1,inferbed:8,joint:9,lang:8,load:4,ls2quebap:4,map:[],mctest2quebap:4,memn2n:[],memn2n_quebap:9,memn:9,mln:8,model:[7,10],modelf:[],modelf_nyt:[],modul:[0,3,4,5,6,7,8,9,10,11,12,13],my_seq2seq:[],nein:11,nyt2quebap:[],packag:[3,4,5,6,7,8,9,10,11,12,13],pairwise_loss:3,pipelin:[],playqa:[10,11],preprocess:[],project:[5,6,7,8,9,10,11,12],ptb:6,quebap:[1,2,3,4,5,6,7,8,9,10,11,12,13],read_quebap:4,read_semeval2017task10:4,same:8,sampl:8,sampler:[],scienceqa2quebap:4,scratch:6,sentihood2quebap:4,seq2seq_model:[],simplequestions2quebap:4,singl:9,sisypho:[],snli2quebap_v1:4,snli2quebap_v2:4,squad2quebap:4,storycloz:12,struct:[],submodul:[3,4,6,7,8,9,10,11,12,13],subpackag:[3,4,5,6,9,10],tabl:1,tensor:7,test_cbt:4,test_evalu:[],test_tensor:3,tfutil:13,train:[6,7],training_pipelin:3,ttt:13,util:[6,10,13],valid:4,vocab:[],vocabulari:[],web:11,welcom:1,wikipedia:[],wikiread:[],word_to_vec:[]}})
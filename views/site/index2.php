<?php
use yii\helpers\Url;
use yii\helpers\Html;

/* @var $this yii\web\View */
$this->title = Yii::t('app', Yii::$app->name);
?>
<?php 
use app\assets\IndexAsset;
IndexAsset::register($this);
?>
<div class="site-index">
	
	    <div class="viewport">
	

    <ul class="slidewrapper" data-current=0>
	
        <li class='slide'>
		<?php echo Html::img('@web/images/verbs.jpg') ?>
        </li>
        <li class='slide'>
		<?php echo Html::img('@web/images/adverbs.jpg') ?>
        </li>
        <li class='slide'>
		<?php echo Html::img('@web/images/tense.jpg') ?>
        </li>
		
		 <li class='slide'>
		 <?php echo Html::img('@web/images/vocabulary.jpg') ?>
        </li>
	
    </ul>
<div id="prev">prev</div>
<div id="next">next</div>	

</div>

    <div class="body-content">

        <div class="row">
            <div class="col-lg-15">
                <h3>Verbs</h3>

                <p>The English language has a large number of irregular verbs, approaching 200 in normal use
                   and significantly more if prefixed forms are counted. In most cases, the irregularity 
                   concerns the past tense (also called preterite) or the past participle.
                   The other inflected parts of the verb the third person singular present indicative in -[e]s, 
                   and the present participle and gerund form in -ing are formed regularly in most cases. There 
                   are a few exceptions: the verb be has irregular forms throughout the present tense; the 
                   verbs have, do and say have irregular -[e]s forms; and certain defective verbs (such as the 
                   modal auxiliaries) lack most inflection.
                   The irregular verbs include many of the most common verbs: the dozen most frequently used 
                   English verbs are all irregular. New verbs (including loans from other languages, and nouns 
                   employed as verbs, such as to facebook) usually follow the regular inflection, unless they 
                   are compound formations from an existing irregular verb (such as housesit, from sit).
				   The following test will check your the knows about the irregular verbs.</p>

                <p><a class="btn btn-default" href="<?=Url::to(['site/verbs']);?>">Verbs &raquo;</a></p>
            </div>
            <div class="col-lg-15">
                <h3>Adverb</h3>

                <p>An adverb is a word that modifies a verb, adjective, another adverb, determiner, noun phrase, clause, or sentence. 
				   Adverbs typically express manner, place, time, frequency, degree, level of certainty, etc., answering questions such as how?, in what way?, when?, where?, and to what extent?. This function is called the adverbial function, and may be realised by single words (adverbs) or by multi-word expressions (adverbial phrases and adverbial clauses).
                   Adverbs are traditionally regarded as one of the parts of speech. However, modern linguists note that it has come to be used as a kind of "catch-all" category, used to classify words with various different types of syntactic behavior, not necessarily having much in common except that they do not fit into any of the other available categories (noun, adjective, preposition, etc.).
                   The following test will check your the knows about the adverbs.</p>
                <p><a class="btn btn-default" href="<?=Url::to(['site/adverbs']);?>">Adverbs &raquo;</a></p>
            </div>
            <div class="col-lg-15">
                <h3>Tense</h3>

                <p>In grammar, tense is a category that expresses time reference. Tenses are usually manifested by the use of specific forms of verbs, particularly in their conjugation patterns.
                   Basic tenses found in many languages include the past, present and future. 
				   Some languages have only two distinct tenses, such as past and non-past, or future and non-future. There are also tenseless languages, like Chinese, which do not have tense at all. 
				   On the other hand, some languages make finer tense distinctions, such as remote vs. recent past, or near vs. remote future.
                   Tenses generally express time relative to the moment of speaking. 
				   In some contexts, however, their meaning may be relativised to a point in the past or future which is established in the discourse (the moment being spoken about). This is called relative (as opposed to absolute) tense. Some languages have different verb forms or constructions which manifest relative tense, such as pluperfect ("past-in-the-past") and "future-in-the-past".
				   The following test will check your the knows about the tense.
				</p>

                <p><a class="btn btn-default" href="<?=Url::to(['article/index']);?>">Tense &raquo;</a></p>
            </div>
            <div class="col-lg-15">
                <h3>Dictionary</h3>

                <p>A dictionary is a collection of words in one or more specific languages, 
				often listed alphabetically (or by radical and stroke for ideographic languages), with usage of 
				information, definitions, etymologies, phonetics, pronunciations, translation, 
				and other information or a book of words in one language with their equivalents in another, 
				also known as a lexicon. 
				It is a lexicographical product designed for utility and function, 
				curated with selected data, presented in a way that shows inter-relationships among the data.
				The following test will check your the knows about English words.
				</p>

                <p><a class="btn btn-default" href="<?=Url::to(['site/dictionary']);?>">Dictionary &raquo;</a></p>
            </div>
        </div>

    </div>
</div>


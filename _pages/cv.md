---
layout: default
permalink: /cv/
title: curriculum vitae
nav-title: cv
nav: true
---
<header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
    <!-- Place PDF download link at the top right. -->
    <div class="row" style="margin-top: -3.5em;">
        <a class="ml-auto mr-2" href="/assets/pdf/CV.pdf" target="_blank">
        <img height="60px" src="/assets/img/pdf_icon.svg">
        </a>
    </div>
</header>

<div class="cv">
	{% for entry in site.data.cv %}
		<div class="card mt-3 p-3">
			<h3 class="card-title">{{ entry.title }}</h3>
            {% if entry.title == "Selected Publications" %}
                <div class="publications">
                    {% bibliography -f papers -q @*[selected=true]* %}
                    <b>Note</b>: For the complete publications list, please see the <a href="publications">publications</a> page or my <a href="https://scholar.google.com/citations?user=SuI63bsAAAAJ">Google scholar</a>.
                </div>
			{% elsif entry.type == "list" %}
				<ul class="card-text font-weight-light list-group list-group-flush">
				{% for content in entry.contents %}
					<li class="list-group-item">{{ content }}</li>
				{% endfor %}
				</ul>
            {% elsif entry.type == "profile" %}
                <div class="row">
                    <div class="col-5">
                        <table class="table table-sm table-borderless">
                            {% for content in entry.contents %}
                                <tr>
                                    <td class="p-0 pr-2 font-weight-bold text-right"><b>{{ content.name }}</b></td>
                                    <td class="p-0 pl-2 font-weight-light text-left">{{ content.value }}</td>
                                </tr>
                            {% endfor %}
                        </table>
                    </div>
                    <div class="col-7">
                        <div class="social">
                            <div class="contact-icons">
                                {% include social.html %}
                            </div>
                        </div>
                    </div>
                </div>
			{% elsif entry.type == "map" %}
                <table class="table table-sm table-borderless">
                    {% for content in entry.contents %}
                        <tr>
                            <td class="p-0 pr-2 font-weight-bold text-right">{{ content.name }}</td>
                            <td class="p-0 pl-2 font-weight-light text-left">{{ content.value }}</td>
                        </tr>
                    {% endfor %}
                </table>
			{% elsif entry.type == "table" %}
				<ul class="card-text font-weight-light list-group list-group-flush">
				{% for content in entry.contents %}
					<li class="list-group-item">
						<div class="row">
                            {% if content.year %}
                            <div class="col-xs-2 col-sm-2 col-md-auto text-left abbr pl-0 mb-0" style="width: 90px;">
                                <abbr class="badge">
                                    {{ content.year }}
                                </abbr>
                            </div>
                            {% endif %}
                            <!-- {% if content.start_date %}
                            <div class="col-xs-2 col-sm-2 col-md-auto abbr">
                                <div class="row" style="margin-right: inherit;">
                                    <abbr class="badge" style="width: 90px;">
                                        {{ content.start_date }}
                                    </abbr>
                                </div>
							{% endif %}
                            {% if content.end_date %}
                                <div style="margin-right: 15px; text-align: center; vertical-align: middle;">
                                    -
                                </div>
                                <div class="row" style="margin-right: inherit;">
                                    <abbr class="badge" style="width: 90px;">
                                        {{ content.end_date }}
                                    </abbr>
                                </div>
                            {% endif %}
                            </div> -->
							<div class="col-xs-10 col-sm-10 col-md mt-2 mt-md-0" style="padding-left: 3px; padding-right: 3px;">
								{% if content.title %}
								<h6 class="title font-weight-bold ml-1 ml-md-4">{{content.title}}</h6>
								{% endif %}
                                {% if content.subtitle %}
								<h6 class="title ml-1 ml-md-4">{{content.subtitle}}</h6>
								{% endif %}
								{% if content.description %}
									<ul class="items">
										{% for item in content.description %}
										    <li>
												{% if item.contents %}
													<span class="item-title">{{ item.title }}</span>
													<ul class="subitems">
													{% for subitem in item.contents %}
														<li><span class="subitem">{{ subitem }}</span></li>
													{% endfor %}
													</ul>
												{% else %}
													<span class="item">{{ item }}</span>
												{% endif %}
											</li>
										{% endfor %}
									</ul>
								{% endif %}
								{% if content.items %}
									<ul class="items">
										{% for item in content.items %}
											<li>
												{% if item.contents %}
													<span class="item-title">{{ item.title }}</span>
													<ul class="subitems">
													{% for subitem in item.contents %}
														<li><span class="subitem">{{ subitem }}</span></li>
													{% endfor %}
													</ul>
												{% else %}
													<span class="item">{{ item }}</span>
												{% endif %}
											</li>
										{% endfor %}
									</ul>
								{% endif %}
							</div>
						</div>
					</li>
				{% endfor %}
				</ul>
            {% elsif entry.type == "table-no-bullets" %}
                <ul class="card-text font-weight-light list-group list-group-flush">
                {% for content in entry.contents %}
                    <li class="list-group-item">
                        <div class="row">
                            {% if content.year %}
                                <div class="col-xs-2 col-sm-2 col-md-auto text-left abbr" style="width: 90px;">
                                    <abbr class="badge">
                                        {{ content.year }}
                                    </abbr>
                                </div>
                            {% endif %}
                            <div class="col-xs-10 col-sm-10 col-md mt-2 mt-md-0">
                                {% if content.title %}
                                <h6 class="title font-weight-bold ml-1 ml-md-4">{{content.title}}</h6>
                                {% endif %}
                                {% if content.description %}
                                    <ul class="items">
                                        {% for item in content.description %}
                                            <li style="list-style-type: none;">
                                                {% if item.contents %}
                                                    <span class="item-title">{{ item.title }}</span>
                                                    <ul class="subitems">
                                                    {% for subitem in item.contents %}
                                                        <li><span class="subitem">{{ subitem }}</span></li>
                                                    {% endfor %}
                                                    </ul>
                                                {% else %}
                                                    <span class="item">{{ item }}</span>
                                                {% endif %}
                                            </li>
                                        {% endfor %}
                                    </ul>
                                {% endif %}
                                {% if content.items %}
                                    <ul class="items">
                                        {% for item in content.items %}
                                            <li>
                                                {% if item.contents %}
                                                    <span class="item-title">{{ item.title }}</span>
                                                    <ul class="subitems">
                                                    {% for subitem in item.contents %}
                                                        <li><span class="subitem">{{ subitem }}</span></li>
                                                    {% endfor %}
                                                    </ul>
                                                {% else %}
                                                    <span class="item">{{ item }}</span>
                                                {% endif %}
                                            </li>
                                        {% endfor %}
                                    </ul>
                                {% endif %}
                            </div>
                        </div>
                    </li>
                {% endfor %}
                </ul>
            {% endif %}
            {% if entry.note %}
                <span class="card-text font-weight-light">{{ entry.note }}</span>
            {% endif %}
		</div>
	{% endfor %}
</div>

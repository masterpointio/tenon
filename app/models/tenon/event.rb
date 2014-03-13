module Tenon
  class Event < ActiveRecord::Base
    # Scopes, attachments, etc.
    scope :published, -> { where(:published => true) }
    scope :upcoming, -> { where(['ends_at > ?', Time.now]).order(:starts_at) }
    scope :past, -> { where(['ends_at < ?', Time.now]).order(:starts_at) }
    tenon_content :description

    # Validations
    validates_presence_of :title, :starts_at, :ends_at

    def self.on(year, month = nil, day = nil)
      raise ArgumentError, "must pass a month to pass a day" if day && !month
      time = Time.mktime(year, month, day)
      delta = day ? 1.day : month ? 1.month : year ? 1.year : fail
      limit = time + delta

      where('starts_at > ? AND starts_at < ?', time, limit).order('starts_at')
    end

    def to_param
      "#{id}-#{title.parameterize}"
    end

    def next
      Event.published.where('starts_at > ?', starts_at).first
    end

    def previous
      Event.published.where('starts_at < ?', starts_at).last
    end
  end
end